import * as itemCount from './directive';
import * as angular from 'angular';

export const NAME = 'itemCount';

angular.module(NAME, [])
    .directive(itemCount.NAME, itemCount.directive.factory());