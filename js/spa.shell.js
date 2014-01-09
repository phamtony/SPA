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
		+'<div class = "spa-shell-modal"></div>'	
},
stateMap = { $container : null },
jqueryMap = {},

setJqueryMap, initModule;
//End Module scope variable 

//Begin utility methods
//End utility methods

//Begin DOM methods
setJqueryMap = function () {
	var $container = stateMap.$container;
	jqueryMap = { $container: $container };
};
//End DOM methods

//Being Event Handlers
//End Even Handlers

//Begin public methods
initModule = function ($container) {
	stateMap.$container = $container;
	$container.html( configMap.main_html );
	setJqueryMap();
};

return { initModule : initModule };

//end public methods

});