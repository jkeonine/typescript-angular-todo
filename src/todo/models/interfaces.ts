/// <reference path="../../../_references.ts" />

module todo {
    export interface IScope extends ng.IScope {
        list: TodoItem[],
        itemStorage: IItemStorage,
        $scope: IScopeScope
    }
    
    export interface IScopeScope {
        addInput: IAddInputCtrl
    }
    
    export interface IAddInputCtrl {
        bindFocus(element: ng.IAugmentedJQuery, list: TodoItem[]);
    }
    
    export interface IItemStorage {
        list: TodoItem[];
        statusFilter: StatusFilter;
    }
    
    export interface IStorageService {
		get(): TodoItem[];
		put(todos: TodoItem[]);
	}
}