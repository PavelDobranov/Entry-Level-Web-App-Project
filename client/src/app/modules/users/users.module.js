import angular from 'angular';
import registerComponent from './components/register/register.component';
import loginComponent from './components/login/login.component';
import userDetailsComponent from './components/user-details/user-details.component';
import changePasswordComponent from './components/change-password/change-password.component';
import authService from './services/users.auth.service';
import usersDataService from './services/users.data.service';
import identityService from './services/users.identity.service';
import usersConfig from './users.module.config';

export default angular
  .module('users', [])
  .component('register', registerComponent)
  .component('login', loginComponent)
  .component('userDetails', userDetailsComponent)
  .component('changePassword', changePasswordComponent)
  .service('authService', authService)
  .service('usersDataService', usersDataService)
  .service('identityService', identityService)
  .config(usersConfig)
  .name;
