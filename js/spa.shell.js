/*
 * spa.shell.js
 * Shell Module for spa
*/

/* jslint          browser : true,       continue: true,
devel : true,  	   indent : 2, 	         maxerr : 50,
newcap : true,     nomen : true,         plusplus : true,
regexp : true,	   sloppy : true,   	 vars : false,
white : true
*/

/* global $, spa */

spa.shell = (function () {

//Begine Module Scope Variables 
var 
	configMap = {
	main_html : String()
		+'<div class = "spa-shell-head">'
			+'<div class = "spa-shell-head-logo"></div>'
			+'<div class = "spa-shell-head-acct"></div>'
			+'<div class = "spa-shell-head-search"></div>'
		+'</div>'
		+'<div class = "spa-shell-main">'
			+'<div class = "spa-shell-main-nav"></div>'
			+'<div class = "spa-shell-main-content"></div>'
		+'</div>'
		+'<div class = "spa-shell-foot"></div>'
		+'<div class = "spa-shell-chat"></div>'
		+'<div class = "spa-shell-modal"></div>',

		chat_extend_time : 1000,
		chat_retract_time : 300,
		chat_extend_height : 450,
		chat_retract_height : 15,
		chat_extend_title : 'Click to retract',
		chat_retracted_title : 'Click to extend'
},
stateMap = { 
	$container : null,
	is_chat_retracted : true 
},
jqueryMap = {},

setJqueryMap, toggleChat, onClickChat, initModule;
//End Module scope variable 

//Begin utility methods
//End utility methods

//Begin DOM methods
	//method setJqueryMap
setJqueryMap = function () {
	var $container = stateMap.$container;
	jqueryMap = { $container: $container };

	jqueryMap = {
		$container : $container, 
		$chat : $container.find( '.spa-shell-chat')
	};
};

	//togglechat method
	//extends or retracts chat slider
	//arguments: extend if true, retracts if false
toggleChat = function ( do_extend, callback ) {
	var
		px_chat_ht = jqueryMap.$chat.height(),
		is_open    = px_chat_ht === configMap.chat_extend_height,
		is_closed  = px_chat_ht === configMap.chat_retract_height,
		is_sliding = ! is_open && ! is_closed;

	// avoid race condition
	if ( is_sliding ){ return false; }

	// Begin extend chat slider
	if ( do_extend ) {
		jqueryMap.$chat.animate(
			{ height : configMap.chat_extend_height },
	  		configMap.chat_extend_time,
	  		function () {
	    		jqueryMap.$chat.attr(
	    			'title', configMap.chat_extend_title
	    		);
	    		stateMap.is_chat_retracted = false;
	    		if ( callback ) { callback ( jqueryMap.$chat ); }
	  		}
		);
		return true;
	}
	// End extend chat slider

	// Begin retract chat slider
	jqueryMap.$chat.animate(
		{ height : configMap.chat_retract_height },
		configMap.chat_retract_time,
		function () {
	    	jqueryMap.$chat.attr(
	    		'title', configMap.chat_retracted_title
	    	);
	    	stateMap.is_chat_retracted = true;
	    	if ( callback ) { callback ( jqueryMap.$chat ); }
	  	}
	);
	return true;
};

//End DOM methods

//Being Event Handlers
onClickChat = function ( event ) {
	toggleChat ( stateMap.is_chat_retracted );
	return false;
};
//End Even Handlers

//Begin public methods
initModule = function ($container) {
	// load html and map jquery collections
	stateMap.$container = $container;
	$container.html( configMap.main_html );
	setJqueryMap();

//initialize chat slider and bind click handler
stateMap.is_chat_retracted = true;
jqueryMap.$chat 
	.attr ( 'title', configMap.chat_retracted_title )
	.click ( onClickChat );

	// //test the toggle
	// setTimeout( function () { toggleChat( true ); }, 3000 );
	// setTimeout( function () { toggleChat( false ); }, 8000 );
};

return { initModule : initModule };

//end public methods

}());