/// <reference path="../../../../_references.ts" />

namespace todo.itemFilter {
    'use strict';

    export class directive implements ng.IDirective {
        restrict = 'E';
        require = '^' + todo.itemStorage.directive.NAME;
        controller = todo.itemFilter.ctrl;
        controllerAs = todo.itemFilter.directive.NAME;
        bindToController = true;
        template = [
            '<ul class="filters">',
                '<li>',
                    '<a ng-class="{selected: itemFilter.path == \'/\'} " href="#/">All</a>',
                '</li>',
                '<li>',
                    '<a ng-class="{selected: itemFilter.path == \'/active\'}" href="#/active">Active</a>',
                '</li>',
                '<li>',
                    '<a ng-class="{selected: itemFilter.path == \'/completed\'}" href="#/completed">Completed</a>',
                '</li>',
            '</ul>'
        ].join('');
        
        static factory(): ng.IDirectiveFactory {
            var directive = () => new todo.itemFilter.directive();
            directive.$inject = [];
            return directive;
        }
        
        public static get NAME(): string { return 'itemFilter'; }
    }
}