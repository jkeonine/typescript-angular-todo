"use strict";
var itemStorage = require('../item-storage/directive');
var ctrl = require('./controller');
exports.NAME = 'itemList';
var directive = (function () {
    function directive() {
        this.restrict = 'E';
        this.require = '^' + itemStorage.NAME;
        this.controller = ctrl.default;
        this.controllerAs = exports.NAME;
        this.bindToController = true;
        this.template = [
            '<ul class="todo-list">',
            '<li ng-repeat="item in itemList.$scope.itemStorage.list | filter: itemList.$scope.itemStorage.statusFilter track by $index" ng-class="{completed: item.completed, editing: item == itemList.editedTodo}">',
            '<div class="view">',
            '<input class="toggle" type="checkbox" ng-model="item.completed">',
            '<label ng-click="itemList.editTodo(item)" ng-bind="item.title"></label>',
            '<button class="destroy" ng-click="itemList.removeTodo(item)"></button>',
            '</div>',
            '<form ng-submit="itemList.doneEditing(item)">',
            '<input class="edit"',
            'ng-model="item.title"',
            'on-blur="itemList.doneEditing(item)"',
            'on-focus="item == itemList.editedTodo"',
            'on-key-down="itemList.revertEdits(item)"',
            'key-down="27">',
            '</form>',
            '</li>',
            '</ul>'
        ].join('');
    }
    directive.factory = function () {
        var d = function () { return new directive(); };
        d.$inject = [];
        return d;
    };
    return directive;
}());
exports.directive = directive;
