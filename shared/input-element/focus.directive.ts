/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../angular/constants.ts" />

var ngConstants = shared.angular.constants;

namespace shared.input.focus {
	'use strict';

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
            var directive = ($timeout) => new shared.input.focus.directive($timeout);
            directive.$inject = [ngConstants.$timeout];
            return directive;
        }
        
        static get NAME(): string { return 'onFocus'; }
    }
    
    interface IAttributes extends ng.IAttributes {
        onFocus(...args: any[]): any;
    }
}