/// <reference path="../../typings/browser.d.ts" />
/// <reference path="../angular/constants.ts" />

import {$destroy} from '../angular/constants'; 

const eventName = 'keydown';

export const NAME = 'onKeyDown';

export class directive implements ng.IDirective {
    restrict = 'A';
    link = ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IAttributes) => {
        element.bind(eventName, (event) => {
            if (event.keyCode === parseInt(attributes.keyDown)) {
                $scope.$apply(attributes.onKeyDown);
            }
        });

        $scope.$on($destroy, () => { element.unbind(eventName); });
    };
    
    static factory(): ng.IDirectiveFactory {
        var d = () => new directive();
        d.$inject = [];
        return d;
    }
}

interface IAttributes extends ng.IAttributes {
    keyDown: string;
    onKeyDown(...args: any[]): any;
}