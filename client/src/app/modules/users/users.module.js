import registerComponent from './components/register/register.component';
import loginComponent from './components/login/login.component';
import userDetailsComponent from './components/user-details/user-details.component';
import authService from './services/users.auth.service';
import usersDataService from './services/users.data.service';
import identityService from './services/users.identity.service';
import usersConfig from './users.module.config';

export default angular
  .module('users', [])
  .component('register', registerComponent)
  .component('login', loginComponent)
  .component('userDetails', userDetailsComponent)
  .service('authService', authService)
  .service('usersDataService', usersDataService)
  .service('identityService', identityService)
  .config(usersConfig)
  .constant('apiUrl', 'http://localhost:3030/api/users')
  .name;
