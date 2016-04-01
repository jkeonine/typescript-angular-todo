/// <reference path="../../../../_references.ts" />

namespace todo.clearCompleted {
    'use strict';
    
    export class directive implements ng.IDirective {
        restrict = 'E';
        require = '^' + todo.itemStorage.directive.NAME;
        controller = todo.clearCompleted.ctrl;
        controllerAs = todo.clearCompleted.directive.NAME;
        bindToController = true;
        template = [
            '<button class="clear-completed" ng-click="clearCompleted.clear()" ng-show="clearCompleted.show">Clear completed</button>'
        ].join('');
        
        static factory(): ng.IDirectiveFactory {
            const directive = () => new todo.clearCompleted.directive();
            directive.$inject = [];
            return directive;
        }
        
        public static get NAME(): string { return 'clearCompleted'; }
    }
}