(function () {
	'use strict';

	angular.module('playground.toolbar', ['playground', 'playground.config', 'playground.toolbar.controller'])

	.directive('wooToolbar', function() {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'app/content/playground/toolbar/toolbar.tpl.html',
      controller: 'WidgetToolbarController',
      controllerAs: 'widgetToolbarCtrl'
    };
  })
	;

}());
