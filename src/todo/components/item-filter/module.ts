import * as itemFilter from './directive';
import * as angular from 'angular';

export const NAME = 'itemFilter';

angular.module(NAME, [])
    .directive(itemFilter.NAME, itemFilter.directive.factory());