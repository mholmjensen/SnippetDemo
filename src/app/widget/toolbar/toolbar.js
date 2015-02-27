(function () {
	'use strict';

	angular.module('widget.toolbar', ['widget', 'widget.config', 'widget.toolbar.controller'])

	.directive('wooToolbar', function() {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'app/widget/toolbar/toolbar.tpl.html',
      controller: 'WidgetToolbarController',
      controllerAs: 'widgetToolbarCtrl'
    };
  })
	;

}());
