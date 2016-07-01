/// <reference path="../../../../_references.ts" />

import {IScope, ITodoItem, Filter} from "../../model";
import {$scope, filterFilter} from '../../../../shared/angular/constants'; 

export default class {
    private completed: number;
    private total: number;
    
    static $inject = [$scope, filterFilter];
    
    constructor($scope: IScope,  filter: ng.IFilterFilter) {
        $scope.$watch(() => $scope.itemStorage.list, (list: ITodoItem[]): void => {
            this.completed = filter(list, Filter.COMPLETE).length;
            this.total = list.length;
        }, true);
    }
}