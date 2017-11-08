"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_component_1 = require("inferno-component");
var inferno_create_element_1 = require("inferno-create-element");
var common_1 = require("../common");
var DeleteTypes;
(function (DeleteTypes) {
    DeleteTypes[DeleteTypes["Anchor"] = 0] = "Anchor";
    DeleteTypes[DeleteTypes["Button"] = 1] = "Button";
})(DeleteTypes = exports.DeleteTypes || (exports.DeleteTypes = {}));
var Delete = (function (_super) {
    __extends(Delete, _super);
    function Delete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Delete.prototype.render = function () {
        var className = common_1.classNameBuilder(['delete',
            this.props.size,
        ]);
        switch (this.props.type) {
            case DeleteTypes.Anchor:
                return (inferno_create_element_1.default("a", __assign({ className: className }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
            case DeleteTypes.Button:
            default:
                return (inferno_create_element_1.default("button", __assign({ className: className }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
    };
    return Delete;
}(inferno_component_1.default));
exports.Delete = Delete;
//# sourceMappingURL=delete.js.map