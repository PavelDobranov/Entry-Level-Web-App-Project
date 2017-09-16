import angular from 'angular';
import uiRouter from 'angular-ui-router';
import localStorage from 'angular-local-storage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { common } from './modules/common/common.module';
import { users } from './modules/users/users.module';
import { appComponent } from './app.component';

export const app = angular
  .module('app', [uiRouter, localStorage, common, users])
  .component('app', appComponent)
  .config(($locationProvider) => {
    $locationProvider.html5Mode(true);
  })
  .name;
