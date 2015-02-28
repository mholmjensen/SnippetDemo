(function () {
  'use strict';

  angular.module('playground.toolbar.controller', ['playground.service'])

  .controller('WidgetToolbarController', function( WidgetPaperService, WidgetCandidateService, WidgetTransformationService ) {
    this.paper = WidgetPaperService.paper;
    this.candidate = WidgetCandidateService.candidate;
    this.transformation = WidgetTransformationService.transformation;
  });

}());
