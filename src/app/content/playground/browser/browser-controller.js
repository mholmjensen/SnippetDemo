(function () {
  'use strict';

  angular.module('playground.browser.controller', [])

  .controller('PlaygroundBrowserController', function( $scope ) {
    var self = this;

    this.status = {
      selected: $scope.files[0]
    };

    this.list = {
      moved: function(event, index, file) {
        self.files.splice(index, 1);
        console.log(event);
      },
      selected: function(event, index, file) {
        self.status.selected = file;
        // $scope.currentPaper = file.content.paper;
        $scope.transformation.currentTransformation = file.content.transformation;
        $scope.candidate.currentCandidate = file.content.candidate;
        $scope.paper.currentPaper = file.content.paper;
        console.log(file);
      }
    };

    this.list.selected( null, -1, $scope.files[0] );

  });

}());
