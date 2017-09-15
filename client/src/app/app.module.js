import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import { common } from './modules/common/common.module';
import { appComponent } from './app.component';

export const app = angular
  .module('app', [uiRouter, common])
  .component('app', appComponent)
  .config(($locationProvider) => {
    $locationProvider.html5Mode(true);
  })
  .name;
