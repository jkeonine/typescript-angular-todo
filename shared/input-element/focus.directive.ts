/// <reference path="../../typings/browser.d.ts" />
/// <reference path="../angular/constants.ts" />

var ngConstants = shared.angular.constants;

'use strict';

export const NAME = 'onFocus';

export class directive implements ng.IDirective {
    constructor(private $timeout: ng.ITimeoutService) { }
    
    restrict = 'A';
    link = ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IAttributes) => {
        $scope.$watch(attributes.onFocus, shouldFocus => {
            if (shouldFocus) {
                this.$timeout(() => element[0].focus(), 0, false);
            }
        });
    };
    
    static factory(): ng.IDirectiveFactory {
        var d = ($timeout: ng.ITimeoutService) => new directive($timeout);
        d.$inject = [ngConstants.$timeout];
        return d;
    }
}

interface IAttributes extends ng.IAttributes {
    onFocus(...args: any[]): any;
}