/// <reference path="../../../../_references.ts" />

module todo.itemStorage {
    'use strict'
    
    export class module {
        public static get NAME(): string { return 'itemStorage'; }
    }
    
    angular.module(todo.itemStorage.module.NAME, [])
        .directive(todo.itemStorage.directive.NAME, todo.itemStorage.directive.factory())
        .directive(todo.itemStorage.show.directive.NAME, todo.itemStorage.show.directive.factory())
        .service(todo.itemStorage.service.NAME, todo.itemStorage.service);
}