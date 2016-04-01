/// <reference path="../../../../_references.ts" />

namespace todo.itemStorage {
    'use strict'
    
    export class service implements todo.IStorageService {
        STORAGE_ID = 'todos-angularjs-typescript';

        get(): ITodoItem[] {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        }

        put(todos: ITodoItem[]) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        }
        
        static get NAME(): string { return 'itemStorageService'; }
    }
}