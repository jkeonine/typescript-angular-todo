"use strict";
var constants_1 = require('../../../../shared/angular/constants');
var service = require('./service');
var default_1 = (function () {
    function default_1($scope, todoStorage) {
        var _this = this;
        this.$scope = $scope;
        this.list = todoStorage.get();
        $scope.$watch(function () { return _this.list; }, function (list) {
            todoStorage.put(list);
        }, true);
    }
    default_1.$inject = [constants_1.$scope, service.NAME];
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
