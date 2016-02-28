/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.markAll {
	'use strict';
	
	export class ctrl {
        private allChecked: boolean;
        
        public static $inject = [ngConstants.SCOPE, ngConstants.FILTERFILTER];
        
        constructor(private $scope: todo.IScope, filter: ng.IFilterFilter) {
            $scope.$watch(() => $scope.itemStorage.list, (list: TodoItem[]): void => {
                var remainingCount = filter(list, todo.Filter.ACTIVE).length;
                this.allChecked = list.length > 0 && !remainingCount;
            }, true);
        }
        
		markAll(): void {
			this.$scope.itemStorage.list.forEach(todoItem => { 
                todoItem.completed = this.allChecked; 
            });
		}
    }
}