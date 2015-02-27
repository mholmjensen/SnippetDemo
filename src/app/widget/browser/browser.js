(function () {
	'use strict';

	angular.module('widget.browser', ['widget', 'widget.config', 'widget.browser.controller', 'widget.browser.file.controller'])

	.directive('wooBrowser', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/widget/browser/browser.tpl.html',
      controller: 'WidgetBrowserController',
      controllerAs: 'widgetBrowserCtrl'
    };
  })

	.directive('wooBrowserFile', function() {
    return {
      restrict: 'EA',
      templateUrl: 'app/widget/browser/browser-file.tpl.html',
      controller: 'WidgetBrowserFileController',
      controllerAs: 'widgetBrowserFileCtrl'
    };
  })
	;

}());
