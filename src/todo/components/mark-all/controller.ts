/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.markAll {
	'use strict';
	
	export class ctrl {
        private allChecked: boolean;
        
        public static $inject = [ngConstants.SCOPE, ngConstants.FILTERFILTER];
        
        constructor(private $scope: todo.IScope, private filter: ng.IFilterFilter) {
            $scope.$watch(() => $scope.itemStorage.list, this.onTodos, true);
        }
        
        onTodos = (list: TodoItem[]): void => {
            var remainingCount = this.filter(list, todo.Filter.ACTIVE).length;
            this.allChecked = list.length > 0 && !remainingCount;
        };
        
		markAll(): void {
			this.$scope.itemStorage.list.forEach(todoItem => { 
                todoItem.completed = this.allChecked; 
            });
		}
    }
}