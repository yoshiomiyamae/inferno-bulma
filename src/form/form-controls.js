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
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_component_1 = require("inferno-component");
var inferno_create_element_1 = require("inferno-create-element");
var common_1 = require("../common");
var IconPosition;
(function (IconPosition) {
    IconPosition["Left"] = "has-icons-left";
    IconPosition["Right"] = "has-icons-right";
})(IconPosition = exports.IconPosition || (exports.IconPosition = {}));
var FieldStyle;
(function (FieldStyle) {
    FieldStyle["Addons"] = "has-addons";
    FieldStyle["Grouped"] = "is-grouped";
})(FieldStyle = exports.FieldStyle || (exports.FieldStyle = {}));
var Label = (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['label']) }, this.props.children));
    };
    return Label;
}(inferno_component_1.default));
exports.Label = Label;
var Field = (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var alignment = this.props.style && this.props.alignment ? [this.props.style, this.props.alignment.substr(2)].join('') : this.props.alignment;
        var multiline = this.props.style ? [this.props.style, (this.props.multiline ? '-multiline' : '')].join('') : '';
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['field',
                this.props.style,
                alignment,
                multiline,
                (this.props.horizontal ? 'is-horizontal' : ''),
            ]) }, this.props.children));
    };
    return Field;
}(inferno_component_1.default));
exports.Field = Field;
var FieldLabel = (function (_super) {
    __extends(FieldLabel, _super);
    function FieldLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldLabel.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['field-label',
                this.props.size,
            ]) }, this.props.children));
    };
    return FieldLabel;
}(inferno_component_1.default));
exports.FieldLabel = FieldLabel;
var FieldBody = (function (_super) {
    __extends(FieldBody, _super);
    function FieldBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldBody.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['field-body']) }, this.props.children));
    };
    return FieldBody;
}(inferno_component_1.default));
exports.FieldBody = FieldBody;
var Control = (function (_super) {
    __extends(Control, _super);
    function Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Control.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['control',
                this.props.iconPosition,
                (this.props.expanded ? 'is-expanded' : ''),
            ]) }, this.props.children));
    };
    return Control;
}(inferno_component_1.default));
exports.Control = Control;
//# sourceMappingURL=form-controls.js.map