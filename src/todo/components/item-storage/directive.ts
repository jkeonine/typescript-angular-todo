/// <reference path="../../../../_references.ts" />

import * as ctrl from "./controller";

export const NAME = 'itemStorage';

export class directive implements ng.IDirective {
    restrict = 'A';
    controller = ctrl.default;
    controllerAs = NAME;

    static factory(): ng.IDirectiveFactory {
        var d = () => new directive();
        d.$inject = [];
        return d;
    }
}
