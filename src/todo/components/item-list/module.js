"use strict";
var itemList = require("./directive");
var keydown = require("../../../../shared/input-element/key-down.directive");
var focus = require("../../../../shared/input-element/focus.directive");
var blur = require("../../../../shared/input-element/blur.directive");
exports.NAME = 'itemList';
angular.module(exports.NAME, [])
    .directive(itemList.NAME, itemList.directive.factory())
    .directive(keydown.NAME, keydown.directive.factory())
    .directive(focus.NAME, focus.directive.factory())
    .directive(blur.NAME, blur.directive.factory());
