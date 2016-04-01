/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

namespace todo.itemFilter {
	'use strict';

	export class ctrl {
        private path: string;
        
        public static $inject = [ngConstants.$scope, ngConstants.$location];
        public static filters = { 
            '/active': todo.Filter.ACTIVE,
            '/completed': todo.Filter.COMPLETE
        };
        
        constructor($scope: todo.IScope, $location: ng.ILocationService) {
			if ($location.path() === '') $location.path('/');

            $scope.$watch(() => $location.path(), (path: string): void => {
                this.path = path.toString();
                $scope.itemStorage.statusFilter = itemFilter.ctrl.filters[this.path];
            });
        }
    }
}