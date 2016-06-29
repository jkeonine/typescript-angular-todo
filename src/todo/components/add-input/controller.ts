/// <reference path="../../../../_references.ts" />

import {IScope, IAddInputCtrl, ITodoItem} from "../../model";

var ngConstants =  shared.angular.constants; 

'use strict';

export default class implements IAddInputCtrl {
    private item: string;
    
    static $inject = [ngConstants.$scope];
    
    constructor(private $scope: IScope) {
        this.item = '';
    }
    
    add(): void {
        var item: string = this.item.trim();
        if (!item.length) return;
        
        this.item = '';
        this.$scope.itemStorage.list.push(<ITodoItem> {
            title: item,
            completed: false
        });
    }
    
    bindFocus(element: ng.IAugmentedJQuery, list: ITodoItem[]): void {
        if(list.length === 0) {
            var inputElement = element.find('input')[0];
            inputElement.focus();
        }
    }     
}