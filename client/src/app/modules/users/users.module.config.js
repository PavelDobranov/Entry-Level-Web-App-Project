export default ($stateProvider) => {
  $stateProvider
    .state('register', {
      url: '/register',
      component: 'register',
      disableWhenAuthenticated: true
    })
    .state('login', {
      url: '/login',
      component: 'login',
      disableWhenAuthenticated: true
    })
    .state('userDetails', {
      url: '/user/:id',
      component: 'userDetails',
      authenticate: true
    })
    .state('changePassword', {
      url: '/user/:id/change-password',
      component: 'changePassword',
      authenticate: true
    });
};
