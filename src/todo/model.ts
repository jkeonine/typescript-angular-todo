/// <reference path="../../_references.ts" />

namespace todo {
    'use strict';
    
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
        statusFilter: IStatusFilter;
    }
    
    export interface IStatusFilter {
        completed: boolean;
    }
    
    export interface IStorageService {
		get(): ITodoItem[];
		put(todos: ITodoItem[]);
	}
    
    export class Filter {
        static get COMPLETE(): IStatusFilter { return <IStatusFilter> { completed: true }};
        static get ACTIVE(): IStatusFilter { return <IStatusFilter> { completed: false }};
    }
}