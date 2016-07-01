"use strict";
var itemStorage = require('./components/item-storage/module');
var markAll = require('./components/mark-all/module');
var addInput = require('./components/add-input/module');
var itemList = require('./components/item-list/module');
var itemCount = require('./components/item-count/module');
var itemFilter = require('./components/item-filter/module');
var clearCompleted = require('./components/clear-completed/module');
var components = [
    itemStorage.NAME,
    markAll.NAME,
    addInput.NAME,
    itemList.NAME,
    itemCount.NAME,
    itemFilter.NAME,
    clearCompleted.NAME
];
angular.module('todo', components);
