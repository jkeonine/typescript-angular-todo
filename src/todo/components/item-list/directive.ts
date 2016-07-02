import * as itemStorage from '../item-storage/directive';
import * as ctrl from './controller';

export const NAME = 'itemList';

export class directive implements ng.IDirective {
    restrict = 'E';
    require = '^' + itemStorage.NAME;
    controller = ctrl.default;
    controllerAs = NAME;
    bindToController = true;
    template = [
        '<ul class="todo-list">',
            '<li ng-repeat="item in itemList.$scope.itemStorage.list | filter: itemList.$scope.itemStorage.statusFilter track by $index" ng-class="{completed: item.completed, editing: item == itemList.editedTodo}">',
                '<div class="view">',
                    '<input class="toggle" type="checkbox" ng-model="item.completed">',
                    '<label ng-click="itemList.editTodo(item)" ng-bind="item.title"></label>',
                    '<button class="destroy" ng-click="itemList.removeTodo(item)"></button>',
                '</div>',
                '<form ng-submit="itemList.doneEditing(item)">',
                    '<input class="edit"', 
                        'ng-model="item.title"', 
                        'on-blur="itemList.doneEditing(item)"', 
                        'on-focus="item == itemList.editedTodo"', 
                        'on-key-down="itemList.revertEdits(item)"',
                        'key-down="27">',
                '</form>',
            '</li>',
        '</ul>'
    ].join('');
    
    static factory(): ng.IDirectiveFactory {
        var d = () => new directive();
        d.$inject = [];
        return d;
    }        
}