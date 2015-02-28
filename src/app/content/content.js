(function () {
	'use strict';

	angular.module('content', [ 'playground' ])

	.directive('wooContent', function() {
    return {
      restrict: 'E',
      scope: true,
			transclude: true,
      templateUrl: 'app/content/content.tpl.html'
    };
  })
	;

}());
