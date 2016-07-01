"use strict";
var itemStorage = require('../item-storage/directive');
var ctrl = require('./controller');
exports.NAME = 'clearCompleted';
var directive = (function () {
    function directive() {
        this.restrict = 'E';
        this.require = "^" + itemStorage.NAME;
        this.controller = ctrl.default;
        this.controllerAs = exports.NAME;
        this.bindToController = true;
        this.template = [
            '<button class="clear-completed" ng-click="clearCompleted.clear()" ng-show="clearCompleted.show">Clear completed</button>'
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
