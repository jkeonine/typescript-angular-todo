/// <reference path="../../../../_references.ts" />

'use strict'

import * as  show from './show/directive';
import * as  itemStorage from './directive';
import * as itemStorageService from './service';

export const NAME = 'itemStorage';

angular.module(NAME, [])
    .directive(itemStorage.NAME, itemStorage.directive.factory())
    .directive(show.NAME, show.directive.factory())
    .service(itemStorageService.NAME, itemStorageService.service);