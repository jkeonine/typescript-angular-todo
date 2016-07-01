"use strict";
exports.NAME = 'itemStorageService';
var service = (function () {
    function service() {
        this.STORAGE_ID = 'todos-angularjs-typescript';
    }
    service.prototype.get = function () {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
    };
    service.prototype.put = function (todos) {
        localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
    };
    return service;
}());
exports.service = service;
