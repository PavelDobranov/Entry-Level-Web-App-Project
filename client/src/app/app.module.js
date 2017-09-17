import angular from 'angular';
import uiRouter from 'angular-ui-router';
import localStorage from 'angular-local-storage';
import 'bootstrap/dist/css/bootstrap.min.css';

import mainComponent from './components/main/main.component';
import homeComponent from './components/home/home.component';
import appHeaderComponent from './components/app-header/app-header.component';
import pageNotFoundComponent from './components/page-not-found/page-not-found.component';
import usersModule from './modules/users/users.module';
import { routes, hooks } from './app.module.config';
import '../css/app.css';

export default angular
  .module('app', [uiRouter, localStorage, usersModule])
  .component('main', mainComponent)
  .component('home', homeComponent)
  .component('appHeader', appHeaderComponent)
  .component('pageNotFound', pageNotFoundComponent)
  .config(routes)
  .run(hooks)
  .name;
