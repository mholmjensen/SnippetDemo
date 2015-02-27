(function () {
  'use strict';

  angular.module('widget.toolbar.controller', ['widget.service'])

  .controller('WidgetToolbarController', function( WidgetPaperService, WidgetCandidateService, WidgetTransformationService ) {
    this.paper = WidgetPaperService.paper;
    this.candidate = WidgetCandidateService.candidate;
    this.transformation = WidgetTransformationService.transformation;
  });

}());
