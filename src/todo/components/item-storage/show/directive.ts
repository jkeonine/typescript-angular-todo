/// <reference path="../../../../../_references.ts" />

module todo.itemStorage.show {
    'use strict'
    
    export class directive implements ng.IDirective {
        restrict = 'A';
        require = '^' + todo.itemStorage.directive.NAME;
        link = (scope: IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IScope): void  => {
            scope.$watch(() => ctrl.list, (list: TodoItem[]) => {                
                var toggle = (list.length > 0) ? element.removeClass('ng-hide') : element.addClass('ng-hide');
            }, true);
        };
        
        static factory(): ng.IDirectiveFactory {
            var directive = () => new todo.itemStorage.show.directive();
            directive.$inject = [];
            return directive;
        }
        
        public static get NAME(): string { return 'itemStorageShow'; }
    }
}