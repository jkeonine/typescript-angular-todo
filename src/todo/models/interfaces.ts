/// <reference path="../../../_references.ts" />

namespace todo {
    export interface IScope extends ng.IScope {
        list: ITodoItem[];
        itemStorage: IItemStorage;
        $scope: IScopeScope;
    }
    
    export interface IScopeScope {
        addInput: IAddInputCtrl;
    }
    
    export interface ITodoItem {
        title: string;
        completed: boolean;
    }
    
    export interface IAddInputCtrl {
        add(): void;
        bindFocus(element: ng.IAugmentedJQuery, list: ITodoItem[]);
    }
    
    export interface IItemStorage {
        list: ITodoItem[];
        statusFilter: StatusFilter;
    }
    
    export interface IStorageService {
		get(): ITodoItem[];
		put(todos: ITodoItem[]);
	}
}