/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.itemStorage {
    'use strict'
    
    export class ctrl {
        public list: TodoItem[];
		public statusFilter: { completed?: boolean };
        
		public static $inject = [ngConstants.SCOPE, todo.itemStorage.service.NAME];

		constructor(private $scope: ng.IScope, todoStorage: IStorageService) {
			this.list = todoStorage.get();

			$scope.$watch(() => this.list, (list: TodoItem[]): void => {
                todoStorage.put(list);
            }, true);
		}
    }
}