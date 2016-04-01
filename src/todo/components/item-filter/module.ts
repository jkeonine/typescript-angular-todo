/// <reference path="../../../../_references.ts" />

namespace todo.itemFilter {
	'use strict';
    
	export class module {
        public static get NAME(): string { return 'itemFilter'; }
    }
    
    angular.module(todo.itemFilter.module.NAME, [])
        .directive(todo.itemFilter.directive.NAME, todo.itemFilter.directive.factory());
}