import angular from 'angular';

import { appHeaderComponent } from './app-header/app-header.component';
import { appFooterComponent } from './app-footer/app-footer.component';

export const common = angular
  .module('common', [])
  .component('appHeader', appHeaderComponent)
  .component('appFooter', appFooterComponent)
  .name;
