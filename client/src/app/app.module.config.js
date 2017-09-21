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

  $transitions.onStart({ to: (state) => state.self.authenticate }, (transition) => {
    if (!identityService.getLoggedUser()) {
      transition.abort();
      return $state.transitionTo('login');
    }
  });

  $transitions.onStart({ to: (state) => state.self.disableWhenAuthenticated }, (transition) => {
    if (identityService.getLoggedUser()) {
      transition.abort();
      return $state.transitionTo('pageNotFound');
    }
  });
};

