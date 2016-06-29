/// <reference path="../../../../_references.ts" />

'use strict'

import * as  show from "./show/directive";
import * as  itemStorage from "./directive";

export const NAME = 'itemStorage';

angular.module(NAME, [])
    .directive(itemStorage.NAME, itemStorage.directive.factory())
    .directive(show.NAME, show.directive.factory())
    .service(todo.itemStorage.service.NAME, todo.itemStorage.service);