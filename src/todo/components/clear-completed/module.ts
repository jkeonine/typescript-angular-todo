import * as clearCompleted from './directive';
import * as angular from 'angular';

export const NAME = 'clearCompleted';

angular.module(NAME, [])
    .directive(clearCompleted.NAME, clearCompleted.directive.factory());