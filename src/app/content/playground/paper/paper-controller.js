(function () {
  'use strict';

  angular.module('playground.paper.controller', ['playground.service'])

  .controller('WidgetPaperController', function( WidgetPaperService, WidgetCandidateService, WidgetTransformationService ) {
    this.paper = WidgetPaperService.paper;
    this.candidate = WidgetCandidateService.candidate;
    this.transformation = WidgetTransformationService.transformation;
    this.lineClicked = function( number ) {
      console.log('lc: ' + number );
    };

    this.selectionInPaper = function( ) {
      var s = window.getSelection();
      var range = s.getRangeAt(0);
      var node = s.anchorNode;
      while (range.toString().indexOf(' ') !== 0) {
        range.setStart(node, (range.startOffset - 1));
      }
      range.setStart(node, range.startOffset + 1);
      do {
        range.setEnd(node, range.endOffset + 1);

      } while (range.toString().indexOf(' ') === -1 && range.toString().trim() !== '' && range.endOffset < node.length);
      var str = range.toString().trim();
      console.log(str);
      this.candidate.current = str;
    };

  });

}());
