module shared.input.focus {
	'use strict';

    export class directive {
        constructor($timeout: ng.ITimeoutService) {
            return <ng.IDirective> {
                link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IAttributes) => {
                    $scope.$watch(attributes.onFocus, newval => {
                        if (newval) {
                            $timeout(() => element[0].focus(), 0, false);
                        }
                    });
                }
            };
        }
        
        static factory(): ng.IDirectiveFactory {
            var directive = ($timeout) => new shared.input.focus.directive($timeout);
            directive.$inject = ['$timeout'];
            return directive;
        }
        
        public static get NAME(): string { return 'onFocus'; }
    }
    
    interface IAttributes extends ng.IAttributes {
        onFocus(...args: any[]): any;
    }
}