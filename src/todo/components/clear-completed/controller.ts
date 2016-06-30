/// <reference path="../../../../_references.ts" />

import {IScope, ITodoItem, Filter} from "../../model";

var ngConstants =  shared.angular.constants; 

'use strict';

export default class {
    public show: boolean;
    
    static $inject = [ngConstants.$scope, ngConstants.filterFilter];
    
    constructor(private $scope: IScope, private filter: ng.IFilterFilter) {
        $scope.$watch(() => $scope.itemStorage.list, (list: ITodoItem[]): void => {
            this.show = filter(list, Filter.COMPLETE).length > 0;
        }, true);
    }
    
    clear(): void {
        this.$scope.itemStorage.list = this.filter(this.$scope.itemStorage.list, Filter.ACTIVE);
    }
}