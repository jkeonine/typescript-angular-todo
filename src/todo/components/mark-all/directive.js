"use strict";
var itemStorage = require("../item-storage/directive");
var ctrl = require("./controller");
exports.NAME = 'markAll';
var directive = (function () {
    function directive() {
        this.restrict = 'E';
        this.require = '^' + itemStorage.NAME;
        this.controller = ctrl.default;
        this.controllerAs = exports.NAME;
        this.bindToController = true;
        this.template = [
            '<input class="toggle-all" type="checkbox" ng-model="markAll.allChecked" ng-click="markAll.markAll()">',
            '<label for="toggle-all">Mark all as complete</label>'
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
