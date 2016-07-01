/// <reference path="../../../../_references.ts" />

import * as itemStorage from "../item-storage/directive";
import * as ctrl from "./controller";

export const NAME = 'markAll';

export class directive implements ng.IDirective {
    restrict = 'E';
    require = '^' + itemStorage.NAME;
    controller = ctrl.default;
    controllerAs = NAME;
    bindToController = true;
    template = [
        '<input class="toggle-all" type="checkbox" ng-model="markAll.allChecked" ng-click="markAll.markAll()">',
        '<label for="toggle-all">Mark all as complete</label>'
    ].join('');
    
    static factory(): ng.IDirectiveFactory {
        var d = () => new directive();
        d.$inject = [];
        return d;
    }
}