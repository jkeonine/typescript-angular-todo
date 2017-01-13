import * as addInput from "./directive";
import * as angular from 'angular';

export const NAME = 'addInput';

angular.module(NAME, [])
    .directive(addInput.NAME, addInput.directive.factory());
