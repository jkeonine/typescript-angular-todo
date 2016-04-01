/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants; 

namespace todo.clearCompleted {
    'use strict';
    
    export class ctrl {
        public show: boolean;
        
        public static $inject = [ngConstants.$scope, ngConstants.filterFilter];
        
        constructor(private $scope: IScope, private filter: ng.IFilterFilter) {
            $scope.$watch(() => $scope.itemStorage.list, (list: ITodoItem[]): void => {
                this.show = filter(list, todo.Filter.COMPLETE).length > 0;
            }, true);
        }
        
		clear(): void {
			this.$scope.itemStorage.list = this.filter(this.$scope.itemStorage.list, todo.Filter.ACTIVE);
		}
    }
}