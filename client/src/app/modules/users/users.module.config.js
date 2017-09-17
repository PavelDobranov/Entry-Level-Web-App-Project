export default ($stateProvider) => {
  $stateProvider
    .state('register', { url: '/register', component: 'register' })
    .state('login', { url: '/login', component: 'login' })
    .state('userDetails', { url: '/user/:id', component: 'userDetails' });
};
