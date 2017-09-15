import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const app = angular
  .module('app', [uiRouter])
  .component('app', appComponent)
  .config(($locationProvider) => {
    $locationProvider.html5Mode(true);
  })
  .name;
