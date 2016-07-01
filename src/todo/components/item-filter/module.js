"use strict";
var itemFilter = require('./directive');
exports.NAME = 'itemFilter';
angular.module(exports.NAME, [])
    .directive(itemFilter.NAME, itemFilter.directive.factory());
