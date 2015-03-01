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
      selected: function(file) {
        console.log(file);
        self.status.selected = file;
        $scope.transformation = file.content.transformation;
        $scope.candidate = file.content.candidate;
        $scope.paper = file.content.paper;
        console.log(file);
      }
    };

  });

}());
