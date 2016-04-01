/// <reference path="../../../../_references.ts" />

namespace todo.clearCompleted {
    'use strict';
    
    export class module {
        public static get NAME(): string { return 'clearCompleted'; }
    }
    
    angular.module(todo.clearCompleted.module.NAME, [])
        .directive(todo.clearCompleted.directive.NAME, todo.clearCompleted.directive.factory());
}