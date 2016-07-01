/// <reference path="../../typings/browser.d.ts" />
/// <reference path="../angular/constants.ts" />

import {$destroy} from '../angular/constants'; 

'use strict';

export const NAME = 'onBlur';

export class directive implements ng.IDirective {
    restrict = 'A';
    link = ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IAttributes) => {
        element.bind('blur', () => { $scope.$apply(attributes.onBlur); });
        $scope.$on($destroy, () => { element.unbind('blur'); });
    };
    
    static factory(): ng.IDirectiveFactory {
        var d = () => new directive();
        d.$inject = [];
        return d;    
    }
}

interface IAttributes extends ng.IAttributes {
    onBlur(...args: any[]): any; 
}