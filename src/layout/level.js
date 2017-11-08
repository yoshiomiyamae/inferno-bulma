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
var Level = (function (_super) {
    __extends(Level, _super);
    function Level() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['level',
                this.props.breakpoint
            ]) }, this.props.children));
    };
    return Level;
}(inferno_component_1.default));
exports.Level = Level;
var LevelLeft = (function (_super) {
    __extends(LevelLeft, _super);
    function LevelLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelLeft.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['level-left']) }, this.props.children));
    };
    return LevelLeft;
}(inferno_component_1.default));
exports.LevelLeft = LevelLeft;
var LevelRight = (function (_super) {
    __extends(LevelRight, _super);
    function LevelRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelRight.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['level-right']) }, this.props.children));
    };
    return LevelRight;
}(inferno_component_1.default));
exports.LevelRight = LevelRight;
var LevelItem = (function (_super) {
    __extends(LevelItem, _super);
    function LevelItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelItem.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['level-item']) }, this.props.children));
    };
    return LevelItem;
}(inferno_component_1.default));
exports.LevelItem = LevelItem;
//# sourceMappingURL=level.js.map