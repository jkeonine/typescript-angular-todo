"use strict";
var itemCount = require('./directive');
exports.NAME = 'itemCount';
angular.module(exports.NAME, [])
    .directive(itemCount.NAME, itemCount.directive.factory());
