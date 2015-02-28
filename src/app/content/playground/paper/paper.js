(function () {
	'use strict';

	angular.module('playground.paper', ['playground', 'playground.config', 'playground.paper.controller', 'monospaced.elastic'])

	.directive('wooPaper', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/content/playground/paper/paper.tpl.html',
      controller: 'PlaygroundPaperController',
      controllerAs: 'playgroundPaperCtrl'
    };
  })

	.directive('wooLine', function() {
    return {
      restrict: 'EA',
			scope: {
        letters: '@letters',
        number: '@number'
      },
      templateUrl: 'app/content/playground/paper/line.tpl.html',
      controller: 'WidgetPaperController',
      controllerAs: 'widgetPaperCtrl'
    };
  })


	.directive('wooWord', function() {
    return {
      restrict: 'EA',
			scope: {
        word: '@word'
      },
      templateUrl: 'app/content/playground/paper/word.tpl.html',
      controller: 'WidgetPaperController',
      controllerAs: 'widgetPaperCtrl'
    };
  })


	;

}());
