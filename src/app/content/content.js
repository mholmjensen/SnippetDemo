(function () {
	'use strict';

	angular.module('content', [ 'widget' ])

	.directive('wooContent', function() {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'app/content/content.tpl.html'
    };
  })
	;

}());
