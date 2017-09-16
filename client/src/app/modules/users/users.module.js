import angular from 'angular';

import { registerComponent } from './register/register.component';
import { loginComponent } from './login/login.component';
import { AuthService } from './users.auth.service';

export const users = angular
  .module('users', [])
  .component('register', registerComponent)
  .component('login', loginComponent)
  .service('AuthService', AuthService)
  .config(($stateProvider) => {
    $stateProvider
      .state('register', { url: '/register', component: 'register' })
      .state('login', { url: '/login', component: 'login' });
  })
  .constant('apiUrl', 'http://localhost:3030/api/users')
  .name;
