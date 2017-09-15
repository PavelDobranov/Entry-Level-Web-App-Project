import angular from 'angular';

import { registerComponent } from './register/register.component';
import { AuthService } from './users.auth.service';

export const users = angular
  .module('users', [])
  .component('register', registerComponent)
  .service('AuthService', AuthService)
  .config(($stateProvider) => {
    $stateProvider
      .state('register', { url: '/register', component: 'register' });
  })
  .name;
