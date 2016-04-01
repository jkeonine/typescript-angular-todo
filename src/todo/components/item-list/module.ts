/// <reference path="../../../../_references.ts" />

import inputElement = shared.input;

namespace todo.itemList {
    'use strict';

    export class module {
        public static get NAME(): string { return 'itemList'; }
    }
    
    angular.module(todo.itemList.module.NAME, [])
        .directive(todo.itemList.directive.NAME, todo.itemList.directive.factory())
        .directive(inputElement.keydown.directive.NAME, inputElement.keydown.directive.factory())
        .directive(inputElement.focus.directive.NAME, inputElement.focus.directive.factory())
        .directive(inputElement.blur.directive.NAME, inputElement.blur.directive.factory());
}