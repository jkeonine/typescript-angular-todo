/// <reference path="../../../../_references.ts" />

import {IScope, ITodoItem, Filter} from "../../model";

var ngConstants =  shared.angular.constants;

namespace todo.itemCount {
	'use strict';

	export class ctrl {
        private completed: number;
        private total: number;
        
        static $inject = [ngConstants.$scope, ngConstants.filterFilter];
        
        constructor($scope: IScope,  filter: ng.IFilterFilter) {
            $scope.$watch(() => $scope.itemStorage.list, (list: ITodoItem[]): void => {
                this.completed = filter(list, Filter.COMPLETE).length;
                this.total = list.length;
            }, true);
        }
    }
}