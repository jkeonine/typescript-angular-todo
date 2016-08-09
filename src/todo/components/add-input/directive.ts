import {IScope, ITodoItem} from "../../model";
import * as itemStorage from "../item-storage/directive"; 
import * as ctrl from "../add-input/controller";

export const NAME = 'addInput';

export class directive implements ng.IDirective {
    restrict = 'E';
    require = `^${itemStorage.NAME}`;
    controller = ctrl.default;
    controllerAs = NAME;
    bindToController = true;
    template = [
        '<form class="todo-form" ng-submit="addInput.add()">',
            '<input class="new-todo" placeholder="What needs to be done?" ng-model="addInput.item" autofocus>',
        '</form>'
    ].join('');
    
    link = (scope: IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: IScope): void  => {
        scope.$watch(() => scope.itemStorage.list, (list: ITodoItem[]) => { 
            ctrl.$scope.addInput.bindFocus(element, list);
        }, true);
    }

    static factory(): ng.IDirectiveFactory {
        const d = () => new directive();
        d.$inject = [];
        return d;
    }
}