import {IScope, ITodoItem, Filter} from "../../model";
import {$scope, filterFilter} from '../../../../shared/angular/constants'; 

export default class {
    public show: boolean;
    
    static $inject = [$scope, filterFilter];
    
    constructor(private $scope: IScope, private filter: ng.IFilterFilter) {
        $scope.$watch(() => $scope.itemStorage.list, (list: ITodoItem[]): void => {
            this.show = filter(list, Filter.COMPLETE).length > 0;
        }, true);
    }
    
    clear(): void {
        this.$scope.itemStorage.list = this.filter(this.$scope.itemStorage.list, Filter.ACTIVE);
    }
}