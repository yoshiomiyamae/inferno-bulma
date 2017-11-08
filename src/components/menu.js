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
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        return (inferno_create_element_1.default("aside", { className: common_1.classNameBuilder(['menu']) }, this.props.children));
    };
    return Menu;
}(inferno_component_1.default));
exports.Menu = Menu;
var MenuLabel = (function (_super) {
    __extends(MenuLabel, _super);
    function MenuLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLabel.prototype.render = function () {
        return (inferno_create_element_1.default("p", { className: common_1.classNameBuilder(['menu-label']) }, this.props.children));
    };
    return MenuLabel;
}(inferno_component_1.default));
exports.MenuLabel = MenuLabel;
var MenuList = (function (_super) {
    __extends(MenuList, _super);
    function MenuList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuList.prototype.render = function () {
        return (inferno_create_element_1.default("ul", { className: common_1.classNameBuilder(['menu-list']) }, this.props.children));
    };
    return MenuList;
}(inferno_component_1.default));
exports.MenuList = MenuList;
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItem.prototype.render = function () {
        var _this = this;
        return (inferno_create_element_1.default("li", null,
            inferno_create_element_1.default("a", { className: common_1.classNameBuilder([(this.props.href ? 'is-active' : '')]) }, (function () {
                if (_this.props.text) {
                    return _this.props.text;
                }
                else {
                    return _this.props.children;
                }
            })()),
            (function () {
                if (_this.props.text) {
                    return _this.props.children;
                }
            })()));
    };
    return MenuItem;
}(inferno_component_1.default));
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu.js.map