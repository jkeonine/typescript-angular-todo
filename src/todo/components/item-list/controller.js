"use strict";
var constants_1 = require('../../../../shared/angular/constants');
var default_1 = (function () {
    function default_1($scope) {
        this.$scope = $scope;
        this.editedTodo = null;
    }
    default_1.prototype.editTodo = function (todoItem) {
        this.editedTodo = todoItem;
        this.originalTodo = angular.extend({}, todoItem);
    };
    default_1.prototype.revertEdits = function (todoItem) {
        var index = this.$scope.itemStorage.list.indexOf(todoItem);
        this.$scope.itemStorage.list[index] = this.originalTodo;
        this.reverted = true;
    };
    default_1.prototype.doneEditing = function (todoItem) {
        this.editedTodo = null;
        this.originalTodo = null;
        if (this.reverted) {
            this.reverted = null;
            return;
        }
        todoItem.title = todoItem.title.trim();
        if (!todoItem.title) {
            this.removeTodo(todoItem);
        }
    };
    default_1.prototype.removeTodo = function (todoItem) {
        var index = this.$scope.itemStorage.list.indexOf(todoItem);
        this.$scope.itemStorage.list.splice(index, 1);
    };
    default_1.$inject = [constants_1.$scope];
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
