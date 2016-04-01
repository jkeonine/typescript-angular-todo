/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants; 

namespace todo.addInput {
	'use strict';
    
	export class ctrl implements IAddInputCtrl {
        private item: string;
        
        public static $inject = [ngConstants.$scope];
        
        constructor(private $scope: IScope) {
            this.item = '';
        }
        
        add(): void {
			var item: string = this.item.trim();
			if (!item.length) return;
            
            var todoItem: ITodoItem = {
                title: item,
                completed: false
            };
            this.$scope.itemStorage.list.push(todoItem);
			this.item = '';
		}
        
        bindFocus(element: ng.IAugmentedJQuery, list: ITodoItem[]): void {
            if(list.length === 0) {
                var inputElement = element.find('input')[0];
                inputElement.focus();
            }
        }     
    }
}