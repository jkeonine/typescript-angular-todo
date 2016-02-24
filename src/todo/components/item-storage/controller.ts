/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.itemStorage {
    'use strict'
    
    export class ctrl {
        public list: TodoItem[];
		public statusFilter: { completed?: boolean };
        
		public static $inject = [ngConstants.SCOPE, todo.itemStorage.service.NAME];

		constructor(private $scope: ng.IScope, private todoStorage: IStorageService) {
			this.list = todoStorage.get();

			$scope.$watch(() => this.list, this.onTodos, true);
		}

		onTodos = (list: TodoItem[]): void => {
			this.todoStorage.put(list);
		}
    }
}