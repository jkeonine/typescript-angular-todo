/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

namespace todo.itemStorage {
    'use strict'
    
    export class ctrl {
        public list: ITodoItem[];
		public statusFilter: { completed?: boolean };
        
		public static $inject = [ngConstants.$scope, todo.itemStorage.service.NAME];

		constructor(private $scope: ng.IScope, todoStorage: IStorageService) {
			this.list = todoStorage.get();

			$scope.$watch(() => this.list, (list: ITodoItem[]): void => {
                todoStorage.put(list);
            }, true);
		}
    }
}