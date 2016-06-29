/// <reference path="../../_references.ts" />

'use strict';

import * as itemStorage from "./components/item-storage/module";
import * as markAll from "./components/mark-all/module";
import * as addInput from "./components/add-input/module";
import * as itemList from "./components/item-list/module";

var components = [
    itemStorage.NAME,
    markAll.NAME,
    addInput.NAME,
    itemList.NAME, 
    todo.itemCount.module.NAME,
    todo.itemFilter.module.NAME,
    todo.clearCompleted.module.NAME
];

angular.module('todo', components);