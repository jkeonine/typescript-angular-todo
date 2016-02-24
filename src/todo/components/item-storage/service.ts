/// <reference path="../../../../_references.ts" />

module todo.itemStorage {
    'use strict'
    
    export class service implements todo.IStorageService {
        STORAGE_ID = 'todos-angularjs-typescript';

        get(): TodoItem[] {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        }

        put(todos: TodoItem[]) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        }
        
        public static get NAME(): string { return 'itemStorageService'; }
    }
}