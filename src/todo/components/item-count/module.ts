/// <reference path="../../../../_references.ts" />

import * as itemCount from './directive';

export const NAME = 'itemCount';

angular.module(NAME, [])
    .directive(itemCount.NAME, itemCount.directive.factory());