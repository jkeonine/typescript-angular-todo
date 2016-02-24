/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.itemCount {
	'use strict';

	export class ctrl {
        private completed: number;
        private total: number;
        
        public static $inject = [ngConstants.SCOPE, ngConstants.FILTERFILTER];
        
        constructor($scope: IScope, private filter: ng.IFilterFilter) {
            $scope.$watch(() => $scope.itemStorage.list, this.onTodos, true);
        }
        
        onTodos = (list: TodoItem[]): void => {
            this.completed = this.filter(list, todo.Filter.COMPLETE).length;
            this.total = list.length;
        }
    }
}