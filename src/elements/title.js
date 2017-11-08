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
var TitleSizes;
(function (TitleSizes) {
    TitleSizes["One"] = "is-1";
    TitleSizes["Two"] = "is-2";
    TitleSizes["Three"] = "is-3";
    TitleSizes["Four"] = "is-4";
    TitleSizes["Five"] = "is-5";
    TitleSizes["Six"] = "is-6";
})(TitleSizes = exports.TitleSizes || (exports.TitleSizes = {}));
var Title = (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Title.prototype.render = function () {
        return (inferno_create_element_1.default("p", { className: common_1.classNameBuilder(['title',
                this.props.size,
            ]) }, this.props.children));
    };
    return Title;
}(inferno_component_1.default));
exports.Title = Title;
var Subtitle = (function (_super) {
    __extends(Subtitle, _super);
    function Subtitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtitle.prototype.render = function () {
        return (inferno_create_element_1.default("p", { className: common_1.classNameBuilder(['subtitle',
                this.props.size,
            ]) }, this.props.children));
    };
    return Subtitle;
}(inferno_component_1.default));
exports.Subtitle = Subtitle;
//# sourceMappingURL=title.js.map