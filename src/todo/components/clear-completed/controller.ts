/// <reference path="../../../../_references.ts" />

module todo.clearCompleted {
    'use strict';
    
    export class ctrl {
        public show: boolean;
        
        public static $inject = [ngConstants.SCOPE, ngConstants.FILTERFILTER];
        
        constructor(private $scope: IScope, private filter: ng.IFilterFilter) {
            $scope.$watch(() => $scope.itemStorage.list, (list: TodoItem[]): void => {
                this.show = filter(list, todo.Filter.COMPLETE).length > 0;
            }, true);
        }
        
		clear() {
			this.$scope.itemStorage.list = this.filter(this.$scope.itemStorage.list, todo.Filter.ACTIVE);
		}
    }
}