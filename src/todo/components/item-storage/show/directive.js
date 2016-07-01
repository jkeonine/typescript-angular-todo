"use strict";
var itemStorage = require("../directive");
exports.NAME = 'itemStorageShow';
var directive = (function () {
    function directive() {
        var _this = this;
        this.restrict = 'A';
        this.require = '^' + itemStorage.NAME;
        this.link = function (scope, element, attrs, ctrl) {
            scope.$watch(function () { return ctrl.list; }, function (list) { return _this.toggle(list, element); }, true);
        };
    }
    directive.prototype.toggle = function (list, element) {
        element.toggleClass('ng-hide', list.length === 0);
    };
    ;
    directive.factory = function () {
        var d = function () { return new directive(); };
        d.$inject = [];
        return d;
    };
    return directive;
}());
exports.directive = directive;
