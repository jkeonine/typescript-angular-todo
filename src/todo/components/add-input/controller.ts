/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.addInput {
	'use strict';
    
	export class ctrl implements IAddInputCtrl {
        private item: string;
        
        public static $inject = [ngConstants.SCOPE];
        
        constructor(private $scope: IScope) {
            this.item = '';
        }
        
        add(): void {
			var item: string = this.item.trim();
			if (!item.length) return;
            
            this.$scope.itemStorage.list.push(new TodoItem(item, false));
			this.item = '';
		}
        
        bindFocus(element: ng.IAugmentedJQuery, list: TodoItem[]): void {
            if(list.length === 0) {
                var inputElement = element.find('input')[0];
                inputElement.focus();
            }
        }     
    }
}