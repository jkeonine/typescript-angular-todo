/// <reference path="../../../../_references.ts" />

module todo.itemStorage {
    'use strict'
    
    export class directive implements ng.IDirective {
        restrict = 'A';
        controller = todo.itemStorage.ctrl;
        controllerAs = todo.itemStorage.directive.NAME;
        
        static factory(): ng.IDirectiveFactory {
            var directive = () => new todo.itemStorage.directive();
            directive.$inject = [];
            return directive;
        }
        
        public static get NAME(): string { return 'itemStorage'; }
    }
}