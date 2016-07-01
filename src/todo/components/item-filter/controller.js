"use strict";
var model_1 = require("../../model");
var constants_1 = require('../../../../shared/angular/constants');
var filters = {
    '/active': model_1.Filter.ACTIVE,
    '/completed': model_1.Filter.COMPLETE
};
var default_1 = (function () {
    function default_1($scope, $location) {
        var _this = this;
        if ($location.path() === '')
            $location.path('/');
        $scope.$watch(function () { return $location.path(); }, function (path) {
            _this.path = path.toString();
            $scope.itemStorage.statusFilter = filters[_this.path];
        });
    }
    default_1.$inject = [constants_1.$scope, constants_1.$location];
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
