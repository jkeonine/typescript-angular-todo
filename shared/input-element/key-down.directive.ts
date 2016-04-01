/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../angular/constants.ts" />

var ngConstants = shared.angular.constants;

namespace shared.input.keydown {
	'use strict';

    const eventName = 'keydown';

    export class directive {
        constructor() {
            return <ng.IDirective> {
                link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IAttributes) => {
                    element.bind(eventName, (event) => {
                        if (event.keyCode === parseInt(attributes.keyDown)) {
                            $scope.$apply(attributes.onKeyDown);
                        }
                    });

                    $scope.$on(ngConstants.$destroy, () => { element.unbind(eventName); });
                }
            };
        }
        
        static factory(): ng.IDirectiveFactory {
            var directive = () => new shared.input.keydown.directive();
            directive.$inject = [];
            return directive;
        }
        
        public static get NAME(): string { return 'onKeyDown'; }
    }
    
    interface IAttributes extends ng.IAttributes {
        keyDown: string;
        onKeyDown(...args: any[]): any;
    }
}