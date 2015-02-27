(function () {
	'use strict';

	angular.module('auth', ['ngMessages', 'auth.service', 'auth.controller', 'auth.directives'])
/*

	.run(function($rootScope, $state, AuthService) {

		AuthService.watch(function(newAuth, oldAuth) {
			// Just logged in
			if (newAuth && (angular.isUndefined(oldAuth) || oldAuth === null)) {
				$state.go(welcomeAuthState);
			}

			// Find out if 'auth' is in the resolve list somewhere between the current state and the root.
			function routeRequiresAuth(startState) {
				var state = startState;
				while (true) {
					if (state.resolve && 'requireAuth' in state.resolve) {
						return true;
					}

					var stateName = state.name;
					var lastDot = stateName.lastIndexOf('.');
					if (lastDot !== -1) {
						var parentStateName = stateName.substring(0, lastDot);
						state = $state.get(parentStateName);
					} else {
						break;
					}
				}

				return false;
			}

			// Should auth status change while viewing a state requiring auth, the user is redirected to login
			if (!newAuth && routeRequiresAuth($state.current)) {
				console.warn('Auth is required for the state you are viewing: "' + $state.current.name + '". Redirecting you to login.');
				$state.go('auth.login');
			}
		}, $rootScope);

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
			console.log(fromState.name + ' -> ' + toState.name);
		});

		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
			if(angular.isObject(error) && error.authRequired) {
				console.warn('Auth required for transitioning to state: "' +  toState.name + '". Redirecting you to login.');
				$state.go('auth.login');
			}
		});
	})
	*/
	;

}());
