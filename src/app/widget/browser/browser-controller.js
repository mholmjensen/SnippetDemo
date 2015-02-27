(function () {
  'use strict';

  angular.module('widget.browser.controller', ['widget.service'])

  .controller('WidgetBrowserController', function( $scope, WidgetPaperService, WidgetTransformationService, WidgetCandidateService ) {
    var self = this;

    $scope.services = {
      paper: WidgetPaperService,
      candidate: WidgetCandidateService,
      transformation: WidgetTransformationService
    };

    $scope.paper = WidgetPaperService;
    $scope.candidate = WidgetCandidateService;
    $scope.transformation = WidgetTransformationService;

    /* Defaults for initialisation as this is currently root widget*/
    /*jshint multistr: true */
    this.longRawText = 'Recipient\'s name\n\
Recipient\'s title\n\
Recipient\'s company\n\
Recipient\'s company address\n\
\n\
Recipient\'s Name:\n\
\n\
People read business letters quickly. Therefore, get to the point in the first paragraph--the first sentence, if possible. In other words, state what you want up front.\n\
\n\
Single space your letters and use a serif typeface. Skip a line between paragraphs. Because people read business letters quickly, use shorter sentences and paragraphs than you would in a longer document. Sentences should average fewer than twenty words, and paragraphs should average fewer than seven lines.\n\
\n\
Space your letter on the page so that it does not crowd the top. However, if possible, keep your letter to one page. Second pages often are not read. Send copies to anyone whose name you mention in the letter or who would be directly affected by the letter.\n\
\n\
Final paragraphs should tell readers what you want them to do or what you will do for them.\n\
\n\
Sincerely,\n\
Signature\n\
Name\n\
\n\
Enclosure\n\
\n\
cc: Name to receive copy';

    this.mediumRawText = 'Recipient\'s name\n\
Recipient\'s title\n\
Recipient\'s company\n\
Recipient\'s company address\n\
\n\
Recipient\'s Name:\n\
\n\
People read business letters quickly. Therefore, get to the point in the first paragraph--the first sentence, if possible. In other words, state what you want up front.\n\
\n\
Single space your letters and use a serif typeface. Skip a line between paragraphs. Because people read business letters quickly, use shorter sentences and paragraphs than you would in a longer document. Sentences should average fewer than twenty words, and paragraphs should average fewer than seven lines.\n\
\n\
Sincerely,\n\
Signature\n\
Name\n\
\n\
Enclosure\n\
\n\
cc: Name to receive copy';

    this.shortRawText = 'Recipient\'s name\n\
Recipient\'s title\n\
Recipient\'s company\n\
Recipient\'s company address\n\
\n\
Recipient\'s Name:\n\
\n\
People read business letters quickly. Therefore, get to the point in the first paragraph--the first sentence, if possible. In other words, state what you want up front.\n\
\n\
Sincerely,\n\
Signature\n\
Name\n\
\n\
Enclosure\n\
\n\
cc: Name to receive copy';

    this.longCurrent = 'This is my candidate';
    this.mediumCurrent = 'Candidate';
    this.shortCurrent = 'Can';

    this.replacements = [
      {
        enabled: true,
        from: 'Recipient\'s name',
        to: 'Hr'
      }, {
        enabled: true,
        from: 'Recipient\'s title',
        to: 'Overlord'
      }, {
        enabled: false,
        from: 'your',
        to: 'DERES'
      }
    ];

    /* Own scope */
    this.files = [
      {
          name: 'F1',
          type: 'paper',
          content: {
            paper: {
              rawText: this.longRawText
            },
            transformation: {
              replacements: this.replacements
            },
            candidate: {
              current: this.shortCurrent
            }
          }
      },
      {
          name: 'F2',
          type: 'workbench',
          content: {
            paper: {
              rawText: this.shortRawText
            },
            transformation: {
              replacements: this.replacements
            },
            candidate: {
              current: this.mediumCurrent
            }
          }
      },
      {
          name: 'F3',
          type: 'tabs',
          content: {
            paper: {
              rawText: this.mediumRawText
            },
            transformation: {
              replacements: this.replacements
            },
            candidate: {
              current: this.longCurrent
            }
          }
      }
    ];
    angular.forEach( this.files, function( file, index ) {
      this.files[index].id = index; //TODO new items have this.files.length as id? (What about removals.. Static indexing variable?)
    }, this);

    /*
    $scope.$watchCollection('services', function( newCollection ) {
      console.log( newCollection );
      $scope.services = newCollection;
    });
    */

    $scope.$watch('paper', function( newVal ) {
      $scope.paper = newVal;
    });
    $scope.$watch('transformation', function( newVal ) {
      $scope.transformation = newVal;
    });
    $scope.$watch('candidate', function( newVal ) {
      $scope.candidate = newVal;
    });

    console.log( WidgetPaperService );

    this.status = {
      selected: self.files[0]
    };

    this.list = {
      moved: function(event, index, file) {
        self.files.splice(index, 1);
        console.log(event);
      },
      selected: function(event, index, file) {
        self.status.selected = file;
        $scope.paper = file.content.paper;
        $scope.transformation = file.content.paper;
        $scope.candidate = file.content.paper;
        console.log('id of file: ' + index);
        console.log(file.content.candidate );
        console.log(WidgetCandidateService );
            console.log( WidgetPaperService );
      }
    };

    this.list.selected( null, -1, self.files[0] );


  });

}());
