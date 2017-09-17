export const routes = ($locationProvider, $stateProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      authenticate: true
    })
    .state('pageNotFound', {
      url: '/not-found',
      component: 'pageNotFound'
    });

  $urlRouterProvider.otherwise('/not-found');
};

export const hooks = ($transitions, $state, $http, identityService) => {
  const loggedUser = identityService.getLoggedUser();

  if (loggedUser) {
    $http.defaults.headers.common.Authorization = loggedUser.token;
  }

  $transitions.onEnter({}, (transition, state) => {
    if (state.authenticate && !identityService.getLoggedUser()) {
      return $state.transitionTo('login');
    }

    if (state.disableWhenAuthenticated && identityService.getLoggedUser()) {
      return $state.transitionTo('pageNotFound');
    }
  });
};

