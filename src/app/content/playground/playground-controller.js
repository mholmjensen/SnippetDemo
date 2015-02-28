(function () {
  'use strict';

  angular.module('playground.controller', [])

  .controller('PlaygroundController', function( $scope ) {
    var self = this;

    /* Defaults for initialisation as this is currently root widget
       This will either come from data storage or from default settings (as now)
    */
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

        this.longReplacements = [
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


            this.mediumReplacements = [
              {
                enabled: true,
                from: 'Recipient\'s name',
                to: 'Hr'
              }, {
                enabled: true,
                from: 'Recipient\'s title',
                to: 'Overlord'
              }
            ];

                this.shortReplacements = [
                  {
                    enabled: false,
                    from: 'your',
                    to: 'DERES'
                  }
                ];


    this.playgroundData = {
      files: [
        {
          name: 'F1',
          type: 'paper',
          content: {
            paper: {
              rawText: this.longRawText
            },
            transformation: {
              replacements: this.mediumReplacements
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
              replacements: this.longReplacements
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
              replacements: this.shortReplacements
            },
            candidate: {
              current: this.longCurrent
            }
          }
        }
      ]
    };

    // scope owner, meaning it is root and owns all data
    // all data shared with children is done via an isolated scope for a directive
    $scope.browser = {};
    $scope.browser.files = this.playgroundData.files;

    $scope.transformation = {};
    $scope.transformation.currentTransformation = null;


    $scope.candidate = {};
    $scope.candidate.currentCandidate = null;


    $scope.paper = {};
    $scope.paper.currentPaper = null;




  });

}());
