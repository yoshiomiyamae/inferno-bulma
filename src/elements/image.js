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
var ImageSize;
(function (ImageSize) {
    ImageSize["Sixteen"] = "is-16x16";
    ImageSize["TwentyFour"] = "is-24x24";
    ImageSize["ThirtyTwo"] = "is-32x32";
    ImageSize["FortyEight"] = "is-48x48";
    ImageSize["SixtyFour"] = "is-64x64";
    ImageSize["NintySix"] = "is-96x96";
    ImageSize["OneTwentyEight"] = "is-128x128";
})(ImageSize = exports.ImageSize || (exports.ImageSize = {}));
var ResponsiveImageWithRatios;
(function (ResponsiveImageWithRatios) {
    ResponsiveImageWithRatios["Square"] = "is-square";
    ResponsiveImageWithRatios["OneByOne"] = "is-1by1";
    ResponsiveImageWithRatios["FourByThree"] = "is-4by3";
    ResponsiveImageWithRatios["ThreeByTwo"] = "is-3by2";
    ResponsiveImageWithRatios["SixteenByNine"] = "is-16by9";
    ResponsiveImageWithRatios["TwoByOne"] = "is-2by1";
})(ResponsiveImageWithRatios = exports.ResponsiveImageWithRatios || (exports.ResponsiveImageWithRatios = {}));
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.prototype.render = function () {
        return (inferno_create_element_1.default("figure", { className: common_1.classNameBuilder(['image',
                this.props.size,
                this.props.responsiveImageWithRatios,
            ]) }, this.props.children));
    };
    return Image;
}(inferno_component_1.default));
exports.Image = Image;
//# sourceMappingURL=image.js.map