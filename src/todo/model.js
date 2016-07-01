"use strict";
var Filter = (function () {
    function Filter() {
    }
    Object.defineProperty(Filter, "COMPLETE", {
        get: function () { return { completed: true }; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Filter, "ACTIVE", {
        get: function () { return { completed: false }; },
        enumerable: true,
        configurable: true
    });
    ;
    return Filter;
}());
exports.Filter = Filter;
