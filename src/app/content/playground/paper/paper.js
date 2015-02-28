(function () {
	'use strict';

	angular.module('playground.paper', ['playground', 'playground.config',
																			'playground.paper.controller',
																			'monospaced.elastic'])

	.directive('wooPaper', function() {
    return {
      restrict: 'EA',
      scope: {
				paper: '=',
				transformation: '=',
				candidate: '='
			},
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
        number: '@number',
				transformation: '=',
				candidate: '='
      },
      templateUrl: 'app/content/playground/paper/line.tpl.html'
    };
  })


	.directive('wooWord', function() {
    return {
      restrict: 'EA',
			scope: {
				word: '@',
				transformation: '=',
				candidate: '='
      },
      templateUrl: 'app/content/playground/paper/word.tpl.html'
    };
  })


	;

}());
