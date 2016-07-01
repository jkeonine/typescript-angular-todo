"use strict";
var constants_1 = require('../angular/constants');
exports.NAME = 'onFocus';
var directive = (function () {
    function directive($timeout) {
        var _this = this;
        this.$timeout = $timeout;
        this.restrict = 'A';
        this.link = function ($scope, element, attributes) {
            $scope.$watch(attributes.onFocus, function (shouldFocus) {
                if (shouldFocus) {
                    _this.$timeout(function () { return element[0].focus(); }, 0, false);
                }
            });
        };
    }
    directive.factory = function () {
        var d = function ($timeout) { return new directive($timeout); };
        d.$inject = [constants_1.$timeout];
        return d;
    };
    return directive;
}());
exports.directive = directive;
