"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flatten = function (array) { return array.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []); };
exports.classNameBuilder = function (className) { return flatten(className).join(' '); };
exports.getEventHandlerFromProps = function (props) {
    var output = {};
    if (typeof props === 'object') {
        for (var key in props) {
            if (typeof props[key] === 'function') {
                output[key] = props[key];
            }
        }
    }
    return output;
};
exports.getChildren = function (props) {
    if (typeof props === 'object') {
        if ('children' in props) {
            return props.children;
        }
        else {
            return [];
        }
    }
    else {
        return [];
    }
};
//# sourceMappingURL=common.js.map