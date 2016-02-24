/// <reference path="../../../../_references.ts" />

module todo.addInput {
    'use strict';

    export class directive implements ng.IDirective {
        restrict = 'E';
        require = '^' + todo.itemStorage.directive.NAME;
        controller = todo.addInput.ctrl;
        controllerAs = todo.addInput.directive.NAME;
        bindToController = true;
        template = [
            '<form class="todo-form" ng-submit="addInput.add()">',
                '<input class="new-todo" placeholder="What needs to be done?" ng-model="addInput.item" autofocus>',
            '</form>'
        ].join('');
        
        link = (scope: IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IScope): void  => {
            scope.$watch(() => scope.itemStorage.list, (newValue: TodoItem[], oldValue: TodoItem[]) => { 
                ctrl.$scope.addInput.bindFocus(element);
            }, true);
        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new todo.addInput.directive();
            directive.$inject = [];
            return directive;
        }
        
        public static get NAME(): string { return 'addInput'; }
    }
}