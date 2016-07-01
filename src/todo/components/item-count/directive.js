"use strict";
var ctrl = require('./controller');
var itemStorage = require('../item-storage/directive');
exports.NAME = 'itemCount';
var directive = (function () {
    function directive() {
        this.restrict = 'E';
        this.require = "^" + itemStorage.NAME;
        this.controller = ctrl.default;
        this.controllerAs = exports.NAME;
        this.bindToController = true;
        this.template = [
            '<span class="todo-count">',
            '<strong ng-bind="itemCount.completed + \' / \' + itemCount.total"></strong>',
            ' <ng-pluralize count="itemCount.total" when="{ one: \'item\', other: \'items\' }"></ng-pluralize> completed',
            '</span>'
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
