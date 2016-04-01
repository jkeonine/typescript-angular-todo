/// <reference path="../../../_references.ts" />

namespace todo {
    'use strict';

    export class TodoItem {
        constructor(public title: string, public completed: boolean) { }
    }
    export class StatusFilter {
        constructor(public completed: boolean) { }
    }
    
    export class Filter {
        public static get COMPLETE(): StatusFilter { return new StatusFilter(true); }
        public static get ACTIVE(): StatusFilter { return new StatusFilter(false); }
    }
}