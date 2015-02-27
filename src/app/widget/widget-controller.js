(function () {
  'use strict';

  angular.module('widget.controller', ['widget.service'])

  .controller('WidgetController', function( WidgetPaperService, WidgetCandidateService, WidgetTransformationService ) {

    this.paper  = WidgetPaperService;
    this.candidate  = WidgetCandidateService;
    this.transformation  = WidgetTransformationService;

  });

}());
