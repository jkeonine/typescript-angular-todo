/// <reference path="../../../../_references.ts" />

namespace todo.itemCount {
    'use strict';

    export class directive implements ng.IDirective {
        restrict = 'E';
        require = '^' + todo.itemStorage.directive.NAME;
        controller = todo.itemCount.ctrl;
        controllerAs = todo.itemCount.directive.NAME;
        bindToController = true;
        template = [
            '<span class="todo-count">',
                '<strong ng-bind="itemCount.completed + \' / \' + itemCount.total"></strong>',
                ' <ng-pluralize count="itemCount.total" when="{ one: \'item\', other: \'items\' }"></ng-pluralize> completed',
            '</span>'    
        ].join('');
        
        static factory(): ng.IDirectiveFactory {
            var directive = () => new todo.itemCount.directive();
            directive.$inject = [];
            return directive;
        }
        
        static get NAME(): string { return 'itemCount'; }
    }
}