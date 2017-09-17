import angular from 'angular';
import uiRouter from 'angular-ui-router';
import localStorage from 'angular-local-storage';
import 'bootstrap/dist/css/bootstrap.min.css';

import mainComponent from './components/main/main.component';
import homeComponent from './components/home/home.component';
import appHeaderComponent from './components/app-header/app-header.component';
import appFooterComponent from './components/app-footer/app-footer.component';
import pageNotFoundComponent from './components/page-not-found/page-not-found.component';
import usersModule from './modules/users/users.module';
import appConfig from './app.module.config';

export default angular
  .module('app', [uiRouter, localStorage, usersModule])
  .component('main', mainComponent)
  .component('home', homeComponent)
  .component('appHeader', appHeaderComponent)
  .component('appFooter', appFooterComponent)
  .component('pageNotFound', pageNotFoundComponent)
  .config(appConfig)
  .name;
