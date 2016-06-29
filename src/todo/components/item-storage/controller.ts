/// <reference path="../../../../_references.ts" />

import {ITodoItem, IStorageService} from "../../model";

var ngConstants =  shared.angular.constants;

'use strict'
    
export default class {
    public list: ITodoItem[];
    public statusFilter: { completed?: boolean };
    
    static $inject = [ngConstants.$scope, todo.itemStorage.service.NAME];

    constructor(private $scope: ng.IScope, todoStorage: IStorageService) {
        this.list = todoStorage.get();

        $scope.$watch(() => this.list, (list: ITodoItem[]): void => {
            todoStorage.put(list);
        }, true);
    }
}
