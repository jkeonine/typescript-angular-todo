/// <reference path="../../../../_references.ts" />

import {IScope, ITodoItem, Filter} from "../../model";
import {$scope, $location} from '../../../../shared/angular/constants'; 

const filters: any = {
    '/active': Filter.ACTIVE,
    '/completed': Filter.COMPLETE
};

export default class {
    private path: string;
    
    static $inject = [$scope, $location];
    
    constructor($scope: IScope, $location: ng.ILocationService) {
        if ($location.path() === '') $location.path('/');

        $scope.$watch(() => $location.path(), (path: string): void => {
            this.path = path.toString();
            $scope.itemStorage.statusFilter = filters[this.path];
        });
    }
}