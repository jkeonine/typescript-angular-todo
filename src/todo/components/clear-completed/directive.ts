/// <reference path="../../../../_references.ts" />

'use strict';

import * as itemStorage from '../item-storage/directive';
import * as ctrl from './controller';

export const NAME = 'clearCompleted';

export class directive implements ng.IDirective {
    restrict = 'E';
    require = `^${itemStorage.NAME}`;
    controller = ctrl.default;
    controllerAs = NAME;
    bindToController = true;
    template = [
        '<button class="clear-completed" ng-click="clearCompleted.clear()" ng-show="clearCompleted.show">Clear completed</button>'
    ].join('');
    
    static factory(): ng.IDirectiveFactory {
        const d = () => new directive();
        d.$inject = [];
        return d;
    }
}