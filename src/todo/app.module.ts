/// <reference path="../../_references.ts" />

import * as itemStorage from './components/item-storage/module';
import * as markAll from './components/mark-all/module';
import * as addInput from './components/add-input/module';
import * as itemList from './components/item-list/module';
import * as itemCount from './components/item-count/module';
import * as itemFilter from './components/item-filter/module';
import * as clearCompleted from './components/clear-completed/module';

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