/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../angular/constants.ts" />

var ngConstants = shared.angular.constants;

namespace shared.input.blur {
    'use strict';
    
    export class directive {
        constructor() {
            return <ng.IDirective> {
                link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IAttributes) => {
                    element.bind('blur', () => { $scope.$apply(attributes.onBlur); });
                    $scope.$on(ngConstants.$destroy, () => { element.unbind('blur'); });
                }
            };
        }
        
        static factory(): ng.IDirectiveFactory {
            var directive = () => new shared.input.blur.directive();
            directive.$inject = [];
            return directive;    
        }
        
        public static get NAME(): string {return 'onBlur'; }
    }
    
    interface IAttributes extends ng.IAttributes {
        onBlur(...args: any[]): any; 
    }
}