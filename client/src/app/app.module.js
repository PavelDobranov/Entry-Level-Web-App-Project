import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import { appComponent } from './app.component';

export const app = angular
  .module('app', [uiRouter])
  .component('app', appComponent)
  .config(($locationProvider) => {
    $locationProvider.html5Mode(true);
  })
  .name;
