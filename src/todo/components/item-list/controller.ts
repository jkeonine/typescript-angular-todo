/// <reference path="../../../../_references.ts" />

var ngConstants =  shared.angular.constants;

module todo.itemList {
	'use strict';
    
	export class ctrl {
        private editedTodo: TodoItem;
        private originalTodo: TodoItem;
        private reverted: boolean; 
        
        public static $inject = [ngConstants.SCOPE];
        
        constructor(private $scope: todo.IScope) {
            this.editedTodo = null;
        }
        
        editTodo(todoItem: TodoItem) {
			this.editedTodo = todoItem;
			this.originalTodo = angular.extend({}, todoItem);
		}

		revertEdits(todoItem: TodoItem) {
            var index = this.$scope.itemStorage.list.indexOf(todoItem);
			this.$scope.itemStorage.list[index] = this.originalTodo;
			this.reverted = true;
		}

		doneEditing(todoItem: TodoItem) {
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

		removeTodo(todoItem: TodoItem) {
            var index = this.$scope.itemStorage.list.indexOf(todoItem);
			this.$scope.itemStorage.list.splice(index, 1);
		}
    }
}