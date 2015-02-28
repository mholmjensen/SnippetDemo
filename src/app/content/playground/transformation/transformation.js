(function () {
	'use strict';

	angular.module('playground.transformation', ['playground', 'playground.config', 'playground.transformation.controller'])

	.directive('wooTransformation', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/content/playground/transformation/transformation.tpl.html',
      controller: 'WidgetTransformationController',
      controllerAs: 'widgetTransformationCtrl'
    };
  })

	.directive('wooCandidate', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/content/playground/transformation/candidate.tpl.html',
      controller: 'WidgetTransformationController',
      controllerAs: 'widgetTransformationCtrl'
    };
  })
	;

}());
