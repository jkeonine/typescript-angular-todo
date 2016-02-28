/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.itemFilter {
	'use strict';

	export class ctrl {
        private path: string;
        
        public static $inject = [ngConstants.SCOPE, ngConstants.LOCATION];
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