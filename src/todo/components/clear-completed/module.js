"use strict";
var clearCompleted = require('./directive');
exports.NAME = 'clearCompleted';
angular.module(exports.NAME, [])
    .directive(clearCompleted.NAME, clearCompleted.directive.factory());
