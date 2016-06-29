'use strict';

export interface IScope extends ng.IScope {
    list: ITodoItem[];
    itemStorage: IItemStorage;
    $scope: IScopeScope;
}

interface IScopeScope {
    addInput: IAddInputCtrl;
}

export interface ITodoItem {
    title: string;
    completed: boolean;
}

export interface IAddInputCtrl {
    add(): void;
    bindFocus(element: ng.IAugmentedJQuery, list: ITodoItem[]): void;
}

interface IItemStorage {
    list: ITodoItem[];
    statusFilter: IStatusFilter;
}

interface IStatusFilter {
    completed: boolean;
}

export interface IStorageService {
    get(): ITodoItem[];
    put(todos: ITodoItem[]): void;
}

export class Filter {
    static get COMPLETE(): IStatusFilter { return <IStatusFilter> { completed: true }};
    static get ACTIVE(): IStatusFilter { return <IStatusFilter> { completed: false }};
}