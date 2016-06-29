/// <reference path="../../../../_references.ts" />

import {IScope, ITodoItem} from "../../model";

var ngConstants =  shared.angular.constants;

namespace todo.itemList {
	'use strict';
    
	export class ctrl {
        private editedTodo: ITodoItem;
        private originalTodo: ITodoItem;
        private reverted: boolean; 
        
        static $inject = [ngConstants.$scope];
        
        constructor(private $scope: IScope) {
            this.editedTodo = null;
        }
        
        editTodo(todoItem: ITodoItem) {
			this.editedTodo = todoItem;
			this.originalTodo = angular.extend({}, todoItem);
		}

		revertEdits(todoItem: ITodoItem) {
            var index = this.$scope.itemStorage.list.indexOf(todoItem);
			this.$scope.itemStorage.list[index] = this.originalTodo;
			this.reverted = true;
		}

		doneEditing(todoItem: ITodoItem) {
			this.editedTodo = null;
			this.originalTodo = null;
			if (this.reverted) {
				// Todo edits were reverted, don't save.
				this.reverted = null;
				return;
			}
			todoItem.title = todoItem.title.trim();
			if (!todoItem.title) {
				this.removeTodo(todoItem);
			}
		}

		removeTodo(todoItem: ITodoItem) {
            var index = this.$scope.itemStorage.list.indexOf(todoItem);
			this.$scope.itemStorage.list.splice(index, 1);
		}
    }
}