/// <reference path="../../../../_references.ts" />

import * as addInput from "./directive";

export const NAME = 'addInput';

angular.module(NAME, [])
    .directive(addInput.NAME, addInput.directive.factory());
