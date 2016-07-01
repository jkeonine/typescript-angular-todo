"use strict";
var model_1 = require("../../model");
var constants_1 = require('../../../../shared/angular/constants');
var default_1 = (function () {
    function default_1($scope, filter) {
        var _this = this;
        this.$scope = $scope;
        $scope.$watch(function () { return $scope.itemStorage.list; }, function (list) {
            var remainingCount = filter(list, model_1.Filter.ACTIVE).length;
            _this.allChecked = list.length > 0 && !remainingCount;
        }, true);
    }
    default_1.prototype.markAll = function () {
        var _this = this;
        this.$scope.itemStorage.list.forEach(function (todoItem) {
            todoItem.completed = _this.allChecked;
        });
    };
    default_1.$inject = [constants_1.$scope, constants_1.filterFilter];
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
