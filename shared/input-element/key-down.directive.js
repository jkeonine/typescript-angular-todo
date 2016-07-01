"use strict";
var constants_1 = require('../angular/constants');
var eventName = 'keydown';
exports.NAME = 'onKeyDown';
var directive = (function () {
    function directive() {
        this.restrict = 'A';
        this.link = function ($scope, element, attributes) {
            element.bind(eventName, function (event) {
                if (event.keyCode === parseInt(attributes.keyDown)) {
                    $scope.$apply(attributes.onKeyDown);
                }
            });
            $scope.$on(constants_1.$destroy, function () { element.unbind(eventName); });
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
