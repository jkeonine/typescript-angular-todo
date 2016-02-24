/// <reference path="../../../../_references.ts" />

module todo.markAll {
	'use strict';
    
	export class module {
        public static get NAME(): string { return 'markAll'; }
    }
    
    angular.module(todo.markAll.module.NAME, [])
        .directive(todo.markAll.directive.NAME, todo.markAll.directive.factory());
}