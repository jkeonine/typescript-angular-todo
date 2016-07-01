"use strict";
var addInput = require("./directive");
exports.NAME = 'addInput';
angular.module(exports.NAME, [])
    .directive(addInput.NAME, addInput.directive.factory());
