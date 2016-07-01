"use strict";
var constants_1 = require('../angular/constants');
exports.NAME = 'onBlur';
var directive = (function () {
    function directive() {
        this.restrict = 'A';
        this.link = function ($scope, element, attributes) {
            element.bind('blur', function () { $scope.$apply(attributes.onBlur); });
            $scope.$on(constants_1.$destroy, function () { element.unbind('blur'); });
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
