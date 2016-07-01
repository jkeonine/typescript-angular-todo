/// <reference path="../../../../_references.ts" />

import {ITodoItem, IStorageService} from "../../model";
import {$scope} from '../../../../shared/angular/constants'; 
import * as service from './service'; 

export default class {
    public list: ITodoItem[];
    public statusFilter: { completed?: boolean };
    
    static $inject = [$scope, service.NAME];

    constructor(private $scope: ng.IScope, todoStorage: IStorageService) {
        this.list = todoStorage.get();

        $scope.$watch(() => this.list, (list: ITodoItem[]): void => {
            todoStorage.put(list);
        }, true);
    }
}
