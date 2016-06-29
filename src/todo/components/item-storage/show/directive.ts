/// <reference path="../../../../../_references.ts" />

import {IScope, ITodoItem} from "../../../model";
import * as itemStorage from "../directive";

'use strict'

export const NAME = 'itemStorageShow';

export class directive implements ng.IDirective {
    private element: ng.IAugmentedJQuery;
    
    restrict = 'A';
    require = '^' + itemStorage.NAME;
    link = (scope: IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IScope): void  => {
        scope.$watch(() => ctrl.list, (list) => this.toggle(list, element), true);
    };
    
    toggle(list: ITodoItem[], element: ng.IAugmentedJQuery): void {
        element.toggleClass('ng-hide', list.length === 0);
    };
    
    static factory(): ng.IDirectiveFactory {
        var d = () => new directive();
        d.$inject = [];
        return d;
    }
}