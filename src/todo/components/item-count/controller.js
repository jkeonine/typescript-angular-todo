"use strict";
var model_1 = require("../../model");
var constants_1 = require('../../../../shared/angular/constants');
var default_1 = (function () {
    function default_1($scope, filter) {
        var _this = this;
        $scope.$watch(function () { return $scope.itemStorage.list; }, function (list) {
            _this.completed = filter(list, model_1.Filter.COMPLETE).length;
            _this.total = list.length;
        }, true);
    }
    default_1.$inject = [constants_1.$scope, constants_1.filterFilter];
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
