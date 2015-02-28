(function () {
  'use strict';

  angular.module('playground.browser-file.controller', ['playground.service', 'playground.browser'])

  .controller('WidgetBrowserFileController', function( WidgetPaperService, WidgetCandidateService, WidgetTransformationService ) {
    this.paper  = WidgetPaperService;
    this.candidate  = WidgetCandidateService;
    this.transformation  = WidgetTransformationService;

  });

}());
