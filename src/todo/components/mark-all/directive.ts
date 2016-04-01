/// <reference path="../../../../_references.ts" />

namespace todo.markAll {
    'use strict';

    export class directive implements ng.IDirective {
        restrict = 'E';
        require = '^' + todo.itemStorage.directive.NAME;
        controller = todo.markAll.ctrl;
        controllerAs = todo.markAll.directive.NAME;
        bindToController = true;
        template = [
            '<input class="toggle-all" type="checkbox" ng-model="markAll.allChecked" ng-click="markAll.markAll()">',
            '<label for="toggle-all">Mark all as complete</label>'
        ].join('');
        
        static factory(): ng.IDirectiveFactory {
            var directive = () => new todo.markAll.directive();
            directive.$inject = [];
            return directive;
        }
        
        static get NAME(): string { return 'markAll'; }
    }
}