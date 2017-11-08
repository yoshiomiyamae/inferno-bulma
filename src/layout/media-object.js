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
var Media = (function (_super) {
    __extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Media.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['media']) }, this.props.children));
    };
    return Media;
}(inferno_component_1.default));
exports.Media = Media;
var MediaContent = (function (_super) {
    __extends(MediaContent, _super);
    function MediaContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaContent.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['media-content']) }, this.props.children));
    };
    return MediaContent;
}(inferno_component_1.default));
exports.MediaContent = MediaContent;
var MediaLeft = (function (_super) {
    __extends(MediaLeft, _super);
    function MediaLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaLeft.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['media-left']) }, this.props.children));
    };
    return MediaLeft;
}(inferno_component_1.default));
exports.MediaLeft = MediaLeft;
var MediaRight = (function (_super) {
    __extends(MediaRight, _super);
    function MediaRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaRight.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['media-right']) }, this.props.children));
    };
    return MediaRight;
}(inferno_component_1.default));
exports.MediaRight = MediaRight;
var MediaItem = (function (_super) {
    __extends(MediaItem, _super);
    function MediaItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaItem.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['media-item']) }, this.props.children));
    };
    return MediaItem;
}(inferno_component_1.default));
exports.MediaItem = MediaItem;
//# sourceMappingURL=media-object.js.map