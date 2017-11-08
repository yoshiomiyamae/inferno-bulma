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
var Context;
(function (Context) {
    Context["Unspecified"] = "";
    Context["Ancestor"] = "is-ancestor";
    Context["Parent"] = "is-parent";
    Context["Child"] = "is-child";
})(Context = exports.Context || (exports.Context = {}));
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['tile',
                this.props.context,
                (this.props.vertical ? 'is-vertical' : ''),
                this.props.size,
            ]) }, this.props.children));
    };
    return Tile;
}(inferno_component_1.default));
exports.Tile = Tile;
//# sourceMappingURL=tiles.js.map