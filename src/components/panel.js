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
var PanelBlockTypes;
(function (PanelBlockTypes) {
    PanelBlockTypes[PanelBlockTypes["Anchor"] = 0] = "Anchor";
    PanelBlockTypes[PanelBlockTypes["Div"] = 1] = "Div";
})(PanelBlockTypes = exports.PanelBlockTypes || (exports.PanelBlockTypes = {}));
var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['panel']) }, this.props.children));
    };
    return Panel;
}(inferno_component_1.default));
exports.Panel = Panel;
var PanelTabs = (function (_super) {
    __extends(PanelTabs, _super);
    function PanelTabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelTabs.prototype.render = function () {
        return (inferno_create_element_1.default("p", { className: common_1.classNameBuilder(['panel-tabs']) }, this.props.children));
    };
    return PanelTabs;
}(inferno_component_1.default));
exports.PanelTabs = PanelTabs;
var PanelBlock = (function (_super) {
    __extends(PanelBlock, _super);
    function PanelBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelBlock.prototype.render = function () {
        var _this = this;
        switch (this.props.type) {
            case PanelBlockTypes.Anchor:
                return (inferno_create_element_1.default("a", __assign({ className: common_1.classNameBuilder(['panel-block']) }, (function () {
                    if (_this.props.href) {
                        return { href: _this.props.href };
                    }
                })(), common_1.getEventHandlerFromProps(this.props)), this.props.children));
            case PanelBlockTypes.Div:
            default:
                return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['panel-block']) }, this.props.children));
        }
    };
    return PanelBlock;
}(inferno_component_1.default));
exports.PanelBlock = PanelBlock;
//# sourceMappingURL=panel.js.map