import angular from 'angular';

import { registerComponent } from './register/register.component';
import { loginComponent } from './login/login.component';
import { userDetailsComponent } from './user-details/user-details.component';
import { AuthService } from './users.auth.service';
import { UsersDataService } from './users.data.service';
import { IdentityService } from './users.identity.service';

export const users = angular
  .module('users', [])
  .component('register', registerComponent)
  .component('login', loginComponent)
  .component('userDetails', userDetailsComponent)
  .service('AuthService', AuthService)
  .service('UsersDataService', UsersDataService)
  .service('IdentityService', IdentityService)
  .config(($stateProvider) => {
    $stateProvider
      .state('register', { url: '/register', component: 'register' })
      .state('login', { url: '/login', component: 'login' })
      .state('userDetails', { url: '/user/:id', component: 'userDetails' });
  })
  .constant('apiUrl', 'http://localhost:3030/api/users')
  .name;
