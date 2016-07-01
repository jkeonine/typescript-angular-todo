"use strict";
var ctrl = require("./controller");
exports.NAME = 'itemStorage';
var directive = (function () {
    function directive() {
        this.restrict = 'A';
        this.controller = ctrl.default;
        this.controllerAs = exports.NAME;
    }
    directive.factory = function () {
        var d = function () { return new directive(); };
        d.$inject = [];
        return d;
    };
    return directive;
}());
exports.directive = directive;
