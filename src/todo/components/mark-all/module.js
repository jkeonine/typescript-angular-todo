"use strict";
var markAll = require("./directive");
exports.NAME = 'markAll';
angular.module(exports.NAME, [])
    .directive(markAll.NAME, markAll.directive.factory());
