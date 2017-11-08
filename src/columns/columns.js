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
var Columns = (function (_super) {
    __extends(Columns, _super);
    function Columns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Columns.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['columns',
                (this.props.multiline ? 'is-multiline' : ''),
                this.props.mobileColums,
                this.props.alignment,
            ]) }, this.props.children));
    };
    return Columns;
}(inferno_component_1.default));
exports.Columns = Columns;
var Column = (function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['column',
                this.props.size,
                this.props.offset,
                this.props.narrow,
            ]) }, this.props.children));
    };
    return Column;
}(inferno_component_1.default));
exports.Column = Column;
//# sourceMappingURL=columns.js.map