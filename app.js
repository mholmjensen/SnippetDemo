'use strict';

(function () {

	angular.module('woo', ['templates', 'ui.router', 'ngClipboard', 'dndLists',
												 'woo.config' ])

	.config(['ngClipProvider', function(ngClipProvider) {
		ngClipProvider.setPath('assets/ZeroClipboard.swf');
	}])

	.run(['$rootScope', function($rootScope) {
		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
			console.log('State change error: %o', error);
		});
	}]);

	$(document).on('click','.navbar-collapse.in',function(e) {
		if($(e.target).is('a') && ($(e.target).attr('class') !== 'dropdown-toggle')) {
			$(this).collapse('hide');
		}
	});

}());

(function () {
	'use strict';

	angular.module('woo.config', ['woo.content', 'woo.menu'])

	.constant('FB', 'https://snippetmanager.firebaseio.com/')

	.config(['$urlRouterProvider', '$stateProvider', function( $urlRouterProvider, $stateProvider ) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('default', {
			url: '/'
		});
	}])


	.run(['$rootScope', function($rootScope) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
			console.log(fromState.name + ' -> ' + toState.name);
		});
	}])

	;

}());

(function () {
	'use strict';

	angular.module('woo.content', [ 'playground' ])

	.directive('wooContent', function() {
    return {
      restrict: 'EA',
      scope: true,
			transclude: true,
      templateUrl: 'app/content/content.tpl.html'
    };
  })
	;

}());

(function() {
  'use strict';

  angular.module('woo.menu.controller', [])
  .controller('MenuController', function () {
    this.name = '';
  });

}());

(function () {
  'use strict';

  angular.module('woo.menu', ['woo.menu.controller'])

  .directive('wooMenu', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/menu/menu.tpl.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl'
    };
  });

}());

(function () {
	'use strict';

	angular.module('playground.config', [])

	;

}());

(function () {
  'use strict';

  angular.module('playground.controller', [ 'playground.service'] )

  .controller('PlaygroundController', ['$scope', 'PlaygroundService', function( $scope, PlaygroundService ) {
    // scope owner, meaning it is root and owns all data
    // all data shared with children is done via an isolated scope for a directive
    $scope.browser = {};
    $scope.browser.files = PlaygroundService.files;

    var initialFile = PlaygroundService.files[0];

    $scope.transformation = {};
    $scope.transformation.currentTransformation = initialFile.content.transformation;

    $scope.candidate = {};
    $scope.candidate.currentCandidate = initialFile.content.candidate;

    $scope.paper = {};
    $scope.paper.currentPaper = initialFile.content.paper;


  }]);

}());

(function() {
	'use strict';

	angular.module('playground.service', [])

	.factory( 'PlaygroundService', function() {
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


		return {
			files: [
				{
					name: 'F1',
					type: 'paper',
					content: {
						paper: {
							rawText: this.longRawText
						},
						transformation: {
							replacements: this.mediumReplacements,
							highlight: ''
						},
						candidate: {
							current: {
								from: '',
								to: ''
							}
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
							replacements: this.longReplacements,
							highlight: ''
						},
						candidate: {
							current: {
								from: '',
								to: ''
							}
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
							replacements: this.shortReplacements,
							highlight: ''
						},
						candidate: {
							current: {
								from: '',
								to: ''
							}
						}
					}
				}
			]
		};
	})
	;

}());

(function () {
	'use strict';

	angular.module('playground', [ 'playground.controller',
																 'playground.toolbar', 'playground.browser', 'playground.transformation', 'playground.paper' ])

	// TODO: Floating widgets
	// TODO Show active (last clicked) widget using panel-primary and panel-info
	.directive('wooPlayground', function() {
		return {
			restrict: 'EA',
			scope: true,
			templateUrl: 'app/content/playground/playground.tpl.html',
      controller: 'PlaygroundController',
      controllerAs: 'playgroundCtrl'
		};
	})
	;

}());

(function () {
  'use strict';

  angular.module('playground.paper.controller', [])

  .controller('PlaygroundPaperController', function() {
    this.lineClicked = function( number ) {
      console.log('lc: ' + number );
    };

  });

}());

(function () {
	'use strict';

	angular.module('playground.paper', ['playground', 'playground.config',
																			'playground.paper.controller',
																			'monospaced.elastic'])

	.directive('wooPaper', function() {
    return {
      restrict: 'EA',
      scope: {
				paper: '=',
				transformation: '=',
				candidate: '='
			},
      templateUrl: 'app/content/playground/paper/paper.tpl.html',
      controller: 'PlaygroundPaperController',
      controllerAs: 'playgroundPaperCtrl'
    };
  })

	.directive('wooLine', function() {
    return {
      restrict: 'EA',
			scope: {
        letters: '@letters',
        number: '@number',
				transformation: '=',
				candidate: '='
      },
      templateUrl: 'app/content/playground/paper/line.tpl.html'
    };
  })


	.directive('wooWord', function() {
    return {
      restrict: 'EA',
			scope: {
				word: '@',
				transformation: '=',
				candidate: '='
      },
      templateUrl: 'app/content/playground/paper/word.tpl.html'
    };
  })



		.filter('substitute', function () {
			return function(line, subs) {
				var output = line;

				angular.forEach(subs, function(sub) {
					if( sub.enabled === undefined || sub.enabled ) {
						output = output.replace(new RegExp(sub.from, 'g'), sub.to);
					}
				});

				return output;
			};
		})

		.filter('highlight', function () {
			return function( line, sub ) {
				if( sub === undefined || sub.to === undefined ) {
					// console.log( 'sub is not well-defined' );
					return line;
				}

				return line.replace(new RegExp(sub.to, 'g'), '<mark>' + sub.to + '</mark>');
			};
		})

		.filter('rawToLines', function () {
			return function( text ) {
				var lines = [];
				//FIXME allow double lines if line.length > 0 twice in a row
				angular.forEach( text.split('\n'), function( line ) {
					var trimmed = line.trim();

					lines.push( ( trimmed.length === 0 ? '' : trimmed ) );

				});
				return lines;
			};
		})

		.filter('lettersToWords', function () {
			return function( letters ) {
				var words = [];
				angular.forEach( letters.split(' '), function( line ) {
					var trimmed = line.trim();
					if( line !== undefined && trimmed.length > 0 ) {
						words.push(trimmed);
					}
				});
				return words;
			};
		})

		.filter('html', ['$sce', function($sce) {
	    return function(val) {
	      return $sce.trustAsHtml(val);
	    };
	  }])


	;

}());

(function () {
  'use strict';

  angular.module('playground.browser.controller', [])

  .controller('PlaygroundBrowserController', ['$scope', function( $scope ) {
    var self = this;

    this.status = {
      selected: $scope.files[0]
    };

    this.list = {
      moved: function(event, index, file) {
        $scope.files.splice(index, 1);
      },
      selected: function(file) {
        self.status.selected = file;
        $scope.transformation = file.content.transformation;
        $scope.candidate = file.content.candidate;
        $scope.paper = file.content.paper;
      }
    };

  }]);

}());

(function () {
  'use strict';

  angular.module('playground.browser-file.controller', ['playground.browser'])

  .controller('PlaygroundBrowserFileController', function() {
  });

}());

(function () {
	'use strict';

	angular.module('playground.browser', ['playground', 'playground.config',
																				'playground.browser.controller',
																				'playground.browser-file.controller'])

	.directive('wooBrowser', function() {
    return {
      restrict: 'EA',
      scope: {
				files: '=files',
				transformation: '=transformation',
				candidate: '=candidate',
				paper: '=paper'
			},
      templateUrl: 'app/content/playground/browser/browser.tpl.html',
      controller: 'PlaygroundBrowserController',
      controllerAs: 'playgroundBrowserCtrl'
    };
  })

	.directive('wooBrowserFile', function() {
    return {
      restrict: 'EA',
      scope: {
				file: '=file'
			},
      templateUrl: 'app/content/playground/browser/browser-file.tpl.html',
      controller: 'PlaygroundBrowserFileController',
      controllerAs: 'playgroundBrowserFileCtrl'
    };
  })
	;

}());

(function () {
  'use strict';

  angular.module('playground.toolbar.controller', [])

  .controller('PlaygroundToolbarController', function( ) {

  });

}());

(function () {
	'use strict';

	angular.module('playground.toolbar', [ 'playground.toolbar.controller' ])

	.directive('wooToolbar', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/content/playground/toolbar/toolbar.tpl.html',
      controller: 'PlaygroundToolbarController',
      controllerAs: 'playgroundToolbarCtrl'
    };
  })
	;

}());

(function () {
  'use strict';

  angular.module('playground.candidate.controller', [])

  .controller('PlaygroundCandidateController', ['$scope', function( $scope ) {
    $scope.addCandidate = function( from, to ) {
      // FIXME: input validation, preferably in DOM
      $scope.transformation.highlight = {
        from: from,
        to: to
      };

      $scope.transformation.replacements.push(
        {
          from: from,
          to: to
        }
      );

      $scope.reset();
    };

    $scope.reset = function() {
      $scope.candidate.current.from = '';
      $scope.candidate.current.to = '';
    };
  }]);

}());

(function () {
  'use strict';

  angular.module('playground.transformation.controller', [])

  .controller('PlaygroundTransformationController', ['$scope', function( $scope ) {
  }]);

}());

(function () {
	'use strict';

	angular.module('playground.transformation', ['playground', 'playground.config',
																							 'playground.transformation.controller', 'playground.candidate.controller'])

	.directive('wooTransformation', function() {
    return {
      restrict: 'EA',
      scope: {
				transformation: '=',
				candidate: '='
			},
      templateUrl: 'app/content/playground/transformation/transformation.tpl.html',
      controller: 'PlaygroundTransformationController',
      controllerAs: 'playgroundTransformationCtrl'
    };
  })

	.directive('wooCandidate', function() {
    return {
      restrict: 'EA',
      scope: {
				transformation: '=',
				candidate: '='
			},
      templateUrl: 'app/content/playground/transformation/candidate.tpl.html',
      controller: 'PlaygroundCandidateController',
      controllerAs: 'playgroundCandidateCtrl'
    };
  })
	;

}());

//# sourceMappingURL=maps/app.js.map