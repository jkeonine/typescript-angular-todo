/// <reference path="../../../../_references.ts" />

'use strict';

import * as clearCompleted from './directive';

export const NAME = 'clearCompleted';

angular.module(NAME, [])
    .directive(clearCompleted.NAME, clearCompleted.directive.factory());