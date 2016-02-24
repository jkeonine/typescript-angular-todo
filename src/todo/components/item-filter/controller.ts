/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.itemFilter {
	'use strict';

	export class ctrl {
        private path: string;
        private itemStorage: IItemStorage;
        
        public static $inject = [ngConstants.SCOPE, ngConstants.LOCATION];
        public static filters = { 
            '/active': todo.Filter.ACTIVE,
            '/completed': todo.Filter.COMPLETE
        };
        
        constructor($scope: todo.IScope, $location: ng.ILocationService) {
			if ($location.path() === '') $location.path('/');

            this.itemStorage = $scope.itemStorage;
            
            $scope.$watch(() => $location.path(), this.onPath);
        }
        
		onPath = (path: string): void => {
            this.path = path.toString();
            this.itemStorage.statusFilter = itemFilter.ctrl.filters[this.path];
		}
    }
}