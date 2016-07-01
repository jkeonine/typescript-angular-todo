/// <reference path="../../../../_references.ts" />

import * as ctrl from './controller';
import * as itemStorage from '../item-storage/directive';

export const NAME = 'itemCount';

export class directive implements ng.IDirective {
    restrict = 'E';
    require = `^${itemStorage.NAME}`;
    controller = ctrl.default;
    controllerAs = NAME;
    bindToController = true;
    template = [
        '<span class="todo-count">',
            '<strong ng-bind="itemCount.completed + \' / \' + itemCount.total"></strong>',
            ' <ng-pluralize count="itemCount.total" when="{ one: \'item\', other: \'items\' }"></ng-pluralize> completed',
        '</span>'    
    ].join('');
    
    static factory(): ng.IDirectiveFactory {
        var d = () => new directive();
        d.$inject = [];
        return d;
    }
}