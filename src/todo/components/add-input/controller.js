"use strict";
var constants_1 = require('../../../../shared/angular/constants');
var default_1 = (function () {
    function default_1($scope) {
        this.$scope = $scope;
        this.item = '';
    }
    default_1.prototype.add = function () {
        var item = this.item.trim();
        if (!item.length)
            return;
        this.item = '';
        this.$scope.itemStorage.list.push({
            title: item,
            completed: false
        });
    };
    default_1.prototype.bindFocus = function (element, list) {
        if (list.length === 0) {
            var inputElement = element.find('input')[0];
            inputElement.focus();
        }
    };
    default_1.$inject = [constants_1.$scope];
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
