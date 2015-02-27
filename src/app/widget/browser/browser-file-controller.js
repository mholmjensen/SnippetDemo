(function () {
  'use strict';

  angular.module('widget.browser.file.controller', ['widget.service', 'widget.browser'])

  .controller('WidgetBrowserFileController', function( WidgetPaperService, WidgetCandidateService, WidgetTransformationService ) {
    this.paper  = WidgetPaperService;
    this.candidate  = WidgetCandidateService;
    this.transformation  = WidgetTransformationService;

  });

}());
