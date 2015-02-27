(function () {
	'use strict';

	angular.module('widget.paper', ['widget', 'widget.config', 'widget.paper.controller', 'monospaced.elastic'])

	.directive('wooPaper', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/widget/paper/paper.tpl.html',
      controller: 'WidgetPaperController',
      controllerAs: 'widgetPaperCtrl'
    };
  })

	.directive('wooLine', function() {
    return {
      restrict: 'EA',
			scope: {
        letters: '@letters',
        number: '@number'
      },
      templateUrl: 'app/widget/paper/line.tpl.html',
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
      templateUrl: 'app/widget/paper/word.tpl.html',
      controller: 'WidgetPaperController',
      controllerAs: 'widgetPaperCtrl'
    };
  })


	;

}());
