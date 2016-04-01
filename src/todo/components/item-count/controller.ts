/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

namespace todo.itemCount {
	'use strict';

	export class ctrl {
        private completed: number;
        private total: number;
        
        public static $inject = [ngConstants.$scope, ngConstants.filterFilter];
        
        constructor($scope: IScope,  filter: ng.IFilterFilter) {
            $scope.$watch(() => $scope.itemStorage.list, (list: ITodoItem[]): void => {
                this.completed = filter(list, todo.Filter.COMPLETE).length;
                this.total = list.length;
            }, true);
        }
    }
}