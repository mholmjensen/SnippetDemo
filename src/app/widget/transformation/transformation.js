(function () {
	'use strict';

	angular.module('widget.transformation', ['widget', 'widget.config', 'widget.transformation.controller'])

	.directive('wooTransformation', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/widget/transformation/transformation.tpl.html',
      controller: 'WidgetTransformationController',
      controllerAs: 'widgetTransformationCtrl'
    };
  })

	.directive('wooCandidate', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/widget/transformation/candidate.tpl.html',
      controller: 'WidgetTransformationController',
      controllerAs: 'widgetTransformationCtrl'
    };
  })
	;

}());
