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
var ButtonTypes;
(function (ButtonTypes) {
    ButtonTypes[ButtonTypes["Anchor"] = 0] = "Anchor";
    ButtonTypes[ButtonTypes["Button"] = 1] = "Button";
    ButtonTypes[ButtonTypes["Submit"] = 2] = "Submit";
    ButtonTypes[ButtonTypes["Reset"] = 3] = "Reset";
})(ButtonTypes = exports.ButtonTypes || (exports.ButtonTypes = {}));
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var className = common_1.classNameBuilder(['button',
            this.props.color,
            this.props.size,
            this.props.state,
            this.props.styles,
            (this.props.static ? 'is-static' : ''),
        ]);
        switch (this.props.type) {
            case ButtonTypes.Anchor:
                return (inferno_create_element_1.default("a", __assign({ className: className }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
            case ButtonTypes.Submit:
                return (inferno_create_element_1.default("input", __assign({ className: className, type: "submit", value: this.props.children, disabled: this.props.disabled }, common_1.getEventHandlerFromProps(this.props))));
            case ButtonTypes.Reset:
                return (inferno_create_element_1.default("input", __assign({ className: className, type: "reset", value: this.props.children, disabled: this.props.disabled }, common_1.getEventHandlerFromProps(this.props))));
            case ButtonTypes.Button:
            default:
                return (inferno_create_element_1.default("button", __assign({ className: className, disabled: this.props.disabled }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
    };
    return Button;
}(inferno_component_1.default));
exports.Button = Button;
//# sourceMappingURL=buttons.js.map