/// <reference path="../../../../_references.ts" />

import {IScope, ITodoItem, Filter} from "../../model";

var ngConstants =  shared.angular.constants;

namespace todo.itemFilter {
	'use strict';

	export class ctrl {
        private path: string;
        
        static $inject = [ngConstants.$scope, ngConstants.$location];
        static filters: any = { 
            '/active': Filter.ACTIVE,
            '/completed': Filter.COMPLETE
        };
        
        constructor($scope: IScope, $location: ng.ILocationService) {
			if ($location.path() === '') $location.path('/');

            $scope.$watch(() => $location.path(), (path: string): void => {
                this.path = path.toString();
                $scope.itemStorage.statusFilter = itemFilter.ctrl.filters[this.path];
            });
        }
    }
}