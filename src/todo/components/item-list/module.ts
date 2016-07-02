import * as itemList from "./directive";
import * as keydown from "../../../../shared/input-element/key-down.directive";
import * as focus from "../../../../shared/input-element/focus.directive";
import * as blur from "../../../../shared/input-element/blur.directive";

export const NAME = 'itemList';

angular.module(NAME, [])
    .directive(itemList.NAME, itemList.directive.factory())
    .directive(keydown.NAME, keydown.directive.factory())
    .directive(focus.NAME, focus.directive.factory())
    .directive(blur.NAME, blur.directive.factory());