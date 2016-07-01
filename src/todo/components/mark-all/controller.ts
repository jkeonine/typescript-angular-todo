/// <reference path="../../../../_references.ts" />

import {IScope, ITodoItem, Filter} from "../../model";
import {$scope, filterFilter} from '../../../../shared/angular/constants'; 

'use strict';

export default class {
    private allChecked: boolean;
    
    static $inject = [$scope, filterFilter];
    
    constructor(private $scope: IScope, filter: ng.IFilterFilter) {
        $scope.$watch(() => $scope.itemStorage.list, (list: ITodoItem[]): void => {
            var remainingCount = filter(list, Filter.ACTIVE).length;
            this.allChecked = list.length > 0 && !remainingCount;
        }, true);
    }
    
    markAll(): void {
        this.$scope.itemStorage.list.forEach(todoItem => { 
            todoItem.completed = this.allChecked; 
        });
    }
}