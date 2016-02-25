/// <reference path="../../../../../_references.ts" />

module todo.itemStorage.show {
    'use strict'
    
    export class directive implements ng.IDirective {
        private element: ng.IAugmentedJQuery;
        
        restrict = 'A';
        require = '^' + todo.itemStorage.directive.NAME;
        link = (scope: IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IScope): void  => {
            this.element = element;
            scope.$watch(() => ctrl.list, this.toggle, true);
        };
        
        toggle = (list: TodoItem[]): void => {
            this.element.toggleClass('ng-hide', list.length === 0);
        };
        
        static factory(): ng.IDirectiveFactory {
            var directive = () => new todo.itemStorage.show.directive();
            directive.$inject = [];
            return directive;
        }
        
        public static get NAME(): string { return 'itemStorageShow'; }
    }
}