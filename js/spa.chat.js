/*
 * spa.chat.js
 * chat feature module for SPA
 */

 /*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa */

spa.chat = (function () {
	//----Begin Module Scope Variables
	var
		configMap = {
			main_html : String()
			+ '<div style = "padding:1em; color: #fff;">'
				+ 'Say hello to chat'
			+ '</div>',
			settable_map : {}
		},

		stateMap = { $container : null },
		jqueryMap = {},

		setJqueryMap, configModule, initModule;

	//----End Module Scope Variables
	
	//----Being Utility Methods
	//----End Utiltity Methods

	//----Being DOM methods
	//DOM method setting Jquery
	setJqueryMap = function () {
		var $container = stateMap.$container;
		jqueryMap = { $container : $container };
	};

	//----End DOM methdos	

	//----Begin Event Handlers
	//----End Event Handlers

	//----Being Public Methods
	//Configure public module
	configModule = function ( input_map ) {
		spa.util.setConfigMap({
			input_map		: input_map,
			settable_map: configMap.settable_map,
			config_map	: configMap
		});
		return true;
	};

	//InitModule
	initModule = function ( $container ) {
		$container.html ( configMap.main_html );
		stateMap.$container = $container;
		setJqueryMap();
		return true;
	};

	//returning public methods
	return { 
		configModule : configModule,
		initModule : initModule
	};

	//----End Public Methods
}());