export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', { url: '/', component: 'home' })
    .state('pageNotFound', { url: '/not-found', component: 'pageNotFound' });

  $urlRouterProvider.otherwise('/not-found');
};
