"use strict";
var itemStorage = require('../item-storage/directive');
var ctrl = require('./controller');
exports.NAME = 'itemFilter';
var directive = (function () {
    function directive() {
        this.restrict = 'E';
        this.require = "^" + itemStorage.NAME;
        this.controller = ctrl.default;
        this.controllerAs = exports.NAME;
        this.bindToController = true;
        this.template = [
            '<ul class="filters">',
            '<li>',
            '<a ng-class="{selected: itemFilter.path == \'/\'} " href="#/">All</a>',
            '</li>',
            '<li>',
            '<a ng-class="{selected: itemFilter.path == \'/active\'}" href="#/active">Active</a>',
            '</li>',
            '<li>',
            '<a ng-class="{selected: itemFilter.path == \'/completed\'}" href="#/completed">Completed</a>',
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
