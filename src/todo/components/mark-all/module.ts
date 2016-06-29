/// <reference path="../../../../_references.ts" />

'use strict';

import * as markAll from "./directive";    

export const NAME = 'markAll';

angular.module(NAME, [])
    .directive(markAll.NAME, markAll.directive.factory());
