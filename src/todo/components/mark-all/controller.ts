/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.markAll {
	'use strict';
	
	export class ctrl {
        private allChecked: boolean;
        private list: TodoItem[];
        
        public static $inject = [ngConstants.SCOPE, ngConstants.FILTERFILTER];
        
        constructor($scope: todo.IScope, private filter: ng.IFilterFilter) {
            this.list = $scope.itemStorage.list;
            $scope.$watch(() => this.list, this.onTodos, true);
        }
        
        onTodos = (list: TodoItem[]): void => {
            var remainingCount = this.filter(list, todo.Filter.ACTIVE).length;
            this.allChecked = !remainingCount;
        };
        
		markAll(): void {
			this.list.forEach(todoItem => { 
                todoItem.completed = this.allChecked; 
            });
		}
    }
}