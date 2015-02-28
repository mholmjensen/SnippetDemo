(function () {
	'use strict';

	angular.module('playground.browser', ['playground', 'playground.config',
																				'playground.browser.controller', 'playground.browser.controller',
																				, 'playground.browser-file.controller'])

	.directive('wooBrowser', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/content/playground/browser/browser.tpl.html',
      controller: 'WidgetBrowserController',
      controllerAs: 'widgetBrowserCtrl'
    };
  })

	.directive('wooBrowserFile', function() {
    return {
      restrict: 'EA',
      templateUrl: 'app/content/playground/browser/browser-file.tpl.html',
      controller: 'WidgetBrowserFileController',
      controllerAs: 'widgetBrowserFileCtrl'
    };
  })
	;

}());
