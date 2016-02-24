/// <reference path="../../../../_references.ts" />

module todo.itemCount {
	'use strict';

	export class module {
        public static get NAME(): string { return 'itemCount'; }
    }
    
    angular.module(todo.itemCount.module.NAME, [])
        .directive(todo.itemCount.directive.NAME, todo.itemCount.directive.factory());
}