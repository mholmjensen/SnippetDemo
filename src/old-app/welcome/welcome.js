(function () {
  'use strict';

  angular.module('welcome', ['menu', 'ui.router', 'widget' ])

  .config(function($stateProvider) {
    $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'app/welcome/welcome.tpl.html',
      controller: 'WelcomeController',
      controllerAs: 'welcomeCtrl'
    })
    .state('welcome.demo', {
      views: {
        'widget.paper': {
    			templateUrl: 'app/widget/widget-paper.tpl.html'
        }
      }
    });
  })

  .controller('WelcomeController', function($state) {
    $state.go('welcome.demo');
  })
  ;

}());
