(function () {
  'use strict';

  angular.module('widget.transformation.controller', ['widget.service'])

  .controller('WidgetTransformationController', function( WidgetPaperService, WidgetCandidateService, WidgetTransformationService ) {
    this.paper = WidgetPaperService.paper;
    this.candidate = WidgetCandidateService.candidate;
    this.transformation = WidgetTransformationService.transformation;
  });

}());
