import * as markAll from "./directive";    
import * as angular from 'angular';

export const NAME = 'markAll';

angular.module(NAME, [])
    .directive(markAll.NAME, markAll.directive.factory());
