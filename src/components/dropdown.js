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
var Dropdown = (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['dropdown',
                (this.props.active ? 'is-active' : ''),
                (this.props.hoverable ? 'is-hoverable' : ''),
                this.props.alignment,
                (this.props.dropUp ? 'is-up' : ''),
            ]) }, this.props.children));
    };
    return Dropdown;
}(inferno_component_1.default));
exports.Dropdown = Dropdown;
var DropdownTrigger = (function (_super) {
    __extends(DropdownTrigger, _super);
    function DropdownTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownTrigger.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['dropdown-trigger']) }, this.props.children));
    };
    return DropdownTrigger;
}(inferno_component_1.default));
exports.DropdownTrigger = DropdownTrigger;
var DropdownMenu = (function (_super) {
    __extends(DropdownMenu, _super);
    function DropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownMenu.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['dropdown-menu']) }, this.props.children));
    };
    return DropdownMenu;
}(inferno_component_1.default));
exports.DropdownMenu = DropdownMenu;
var DropdownContent = (function (_super) {
    __extends(DropdownContent, _super);
    function DropdownContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownContent.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['dropdown-content']) }, this.props.children));
    };
    return DropdownContent;
}(inferno_component_1.default));
exports.DropdownContent = DropdownContent;
var DropdownItem = (function (_super) {
    __extends(DropdownItem, _super);
    function DropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownItem.prototype.render = function () {
        if (this.props.href) {
            return (inferno_create_element_1.default("a", __assign({ className: common_1.classNameBuilder(['dropdown-item']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
        else {
            return (inferno_create_element_1.default("p", { className: common_1.classNameBuilder(['dropdown-item']) }, this.props.children));
        }
    };
    return DropdownItem;
}(inferno_component_1.default));
exports.DropdownItem = DropdownItem;
//# sourceMappingURL=dropdown.js.map