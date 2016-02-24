/// <reference path="../../_references.ts" />

module todo {
    'use strict';
    
    var components = [
        todo.itemStorage.module.NAME,
        todo.markAll.module.NAME,
        todo.addInput.module.NAME,
        todo.itemList.module.NAME, 
        todo.itemCount.module.NAME,
        todo.itemFilter.module.NAME,
        todo.clearCompleted.module.NAME
    ];
    
    angular.module('todo', components);
}