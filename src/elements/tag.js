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
var TagTypes;
(function (TagTypes) {
    TagTypes[TagTypes["Anchor"] = 0] = "Anchor";
    TagTypes[TagTypes["Span"] = 1] = "Span";
})(TagTypes = exports.TagTypes || (exports.TagTypes = {}));
var Tags = (function (_super) {
    __extends(Tags, _super);
    function Tags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tags.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['tags',
                (this.props.hasAdons ? 'has-addons' : ''),
            ]) }, this.props.children));
    };
    return Tags;
}(inferno_component_1.default));
exports.Tags = Tags;
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var className = common_1.classNameBuilder(['tag',
            this.props.color,
            this.props.size,
            (this.props.rounded ? 'is-rounded' : ''),
            (this.props.delete ? 'is-delete' : ''),
        ]);
        switch (this.props.type) {
            case TagTypes.Anchor:
                return (inferno_create_element_1.default("a", { className: className }, this.props.children));
            case TagTypes.Span:
            default:
                return (inferno_create_element_1.default("span", { className: className }, this.props.children));
        }
    };
    return Tag;
}(inferno_component_1.default));
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map