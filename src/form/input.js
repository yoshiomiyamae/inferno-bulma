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
var InputTypes;
(function (InputTypes) {
    InputTypes["Text"] = "text";
    InputTypes["Password"] = "password";
    InputTypes["Email"] = "email";
    InputTypes["Tel"] = "tel";
})(InputTypes = exports.InputTypes || (exports.InputTypes = {}));
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        return (inferno_create_element_1.default("input", __assign({ className: common_1.classNameBuilder(['input',
                this.props.color,
                this.props.size,
                this.props.state,
            ]), type: this.props.type, placeholder: this.props.placeholder, readOnly: this.props.readonly, disabled: this.props.disabled, value: this.props.value }, common_1.getEventHandlerFromProps(this.props))));
    };
    return Input;
}(inferno_component_1.default));
exports.Input = Input;
//# sourceMappingURL=input.js.map