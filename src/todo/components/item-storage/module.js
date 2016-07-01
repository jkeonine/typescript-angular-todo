"use strict";
var show = require('./show/directive');
var itemStorage = require('./directive');
var itemStorageService = require('./service');
exports.NAME = 'itemStorage';
angular.module(exports.NAME, [])
    .directive(itemStorage.NAME, itemStorage.directive.factory())
    .directive(show.NAME, show.directive.factory())
    .service(itemStorageService.NAME, itemStorageService.service);
