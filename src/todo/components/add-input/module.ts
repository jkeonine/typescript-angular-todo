/// <reference path="../../../../_references.ts" />

namespace todo.addInput {
    'use strict'
    
    export class module {
        public static get NAME(): string { return 'addInput'; }
    }
    
    angular.module(todo.addInput.module.NAME, [])
        .directive(todo.addInput.directive.NAME, todo.addInput.directive.factory());
}