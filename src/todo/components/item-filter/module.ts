/// <reference path="../../../../_references.ts" />

'use strict';

import * as itemFilter from './directive';

export const NAME = 'itemFilter';

angular.module(NAME, [])
    .directive(itemFilter.NAME, itemFilter.directive.factory());