"use strict";
var itemStorage = require("../item-storage/directive");
var ctrl = require("../add-input/controller");
exports.NAME = 'addInput';
var directive = (function () {
    function directive() {
        this.restrict = 'E';
        this.require = "^" + itemStorage.NAME;
        this.controller = ctrl.default;
        this.controllerAs = exports.NAME;
        this.bindToController = true;
        this.template = [
            '<form class="todo-form" ng-submit="addInput.add()">',
            '<input class="new-todo" placeholder="What needs to be done?" ng-model="addInput.item" autofocus>',
            '</form>'
        ].join('');
        this.link = function (scope, element, attrs, ctrl) {
            scope.$watch(function () { return scope.itemStorage.list; }, function (list) {
                ctrl.$scope.addInput.bindFocus(element, list);
            }, true);
        };
    }
    directive.factory = function () {
        var d = function () { return new directive(); };
        d.$inject = [];
        return d;
    };
    return directive;
}());
exports.directive = directive;
