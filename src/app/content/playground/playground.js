(function () {
	'use strict';

	angular.module('playground', ['playground.config', 'playground.service',
																'playground.browser', 'playground.paper',
																'playground.toolbar', 'playground.transformation'])

	// TODO: Floating widgets
	// TODO Show active (last clicked) widget using panel-primary and panel-info
	.directive('wooPlayground', function() {
		return {
			restrict: 'EA',
			scope: true,
			templateUrl: 'app/content/playground/playground.tpl.html',
			controller: 'WidgetPlaygroundController',
			controllerAs: 'widgetPlaygroundCtrl'
		};
	})
	;

}());
