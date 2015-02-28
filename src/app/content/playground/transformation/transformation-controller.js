(function () {
  'use strict';

  angular.module('playground.transformation.controller', ['playground.service'])

  .controller('WidgetTransformationController', function( WidgetPaperService, WidgetCandidateService, WidgetTransformationService ) {
    this.paper = WidgetPaperService.paper;
    this.candidate = WidgetCandidateService.candidate;
    this.transformation = WidgetTransformationService.transformation;
  });

}());
