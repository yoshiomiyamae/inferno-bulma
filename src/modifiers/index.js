"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
exports.Float = helpers_1.Float;
exports.Other = helpers_1.Other;
exports.Spacing = helpers_1.Spacing;
var responsive_helpers_1 = require("./responsive-helpers");
exports.Hide = responsive_helpers_1.Hide;
exports.Show = responsive_helpers_1.Show;
var typography_helpers_1 = require("./typography-helpers");
exports.ResponsiveSize = typography_helpers_1.ResponsiveSize;
exports.ResponsiveTextAlignment = typography_helpers_1.ResponsiveTextAlignment;
exports.Size = typography_helpers_1.Size;
exports.TextAlignment = typography_helpers_1.TextAlignment;
exports.TextColors = typography_helpers_1.TextColors;
exports.TextTransformation = typography_helpers_1.TextTransformation;
exports.TextWeight = typography_helpers_1.TextWeight;
var Colors;
(function (Colors) {
    Colors["White"] = "is-white";
    Colors["Black"] = "is-black";
    Colors["Light"] = "is-light";
    Colors["Dark"] = "is-dark";
    Colors["Primary"] = "is-primary";
    Colors["Link"] = "is-link";
    Colors["Info"] = "is-info";
    Colors["Success"] = "is-success";
    Colors["Warning"] = "is-warning";
    Colors["Danger"] = "is-danger";
})(Colors = exports.Colors || (exports.Colors = {}));
var Sizes;
(function (Sizes) {
    Sizes["Normal"] = "is-normal";
    Sizes["Small"] = "is-small";
    Sizes["Medium"] = "is-medium";
    Sizes["Large"] = "is-large";
})(Sizes = exports.Sizes || (exports.Sizes = {}));
var Styles;
(function (Styles) {
    Styles["Outlined"] = "is-outlined";
    Styles["Inverted"] = "is-inverted";
})(Styles = exports.Styles || (exports.Styles = {}));
var States;
(function (States) {
    States["Normal"] = "";
    States["Hover"] = "is-hovered";
    States["Focus"] = "is-focused";
    States["Active"] = "is-active";
    States["Loading"] = "is-loading";
})(States = exports.States || (exports.States = {}));
var Alignments;
(function (Alignments) {
    Alignments["Centered"] = "is-centered";
    Alignments["Right"] = "is-right";
})(Alignments = exports.Alignments || (exports.Alignments = {}));
var Breakpoints;
(function (Breakpoints) {
    Breakpoints["Mobile"] = "is-mobile";
    Breakpoints["Widescreen"] = "is-widescreen";
    Breakpoints["Fullhd"] = "is-fullhd";
})(Breakpoints = exports.Breakpoints || (exports.Breakpoints = {}));
//# sourceMappingURL=index.js.map