import * as itemStorage from '../item-storage/directive'; 
import * as ctrl from './controller'; 

export const NAME = 'itemFilter';

export class directive implements ng.IDirective {
    restrict = 'E';
    require = `^${itemStorage.NAME}`;
    controller = ctrl.default;
    controllerAs = NAME;
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
        var d = () => new directive();
        d.$inject = [];
        return d;
    }
}