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
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        return (inferno_create_element_1.default("table", { className: common_1.classNameBuilder(['table',
                (this.props.bordered ? 'is-bordered' : ''),
                (this.props.striped ? 'is-striped' : ''),
                (this.props.narrow ? 'is-narrow' : ''),
                (this.props.hoverable ? 'is-hoverable' : ''),
                (this.props.fullwidth ? 'is-fullwidth' : ''),
            ]) }, this.props.children));
    };
    return Table;
}(inferno_component_1.default));
exports.Table = Table;
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableRow.prototype.render = function () {
        return (inferno_create_element_1.default("tr", { className: common_1.classNameBuilder([(this.props.seleted ? 'is-selected' : '')]) }, this.props.children));
    };
    return TableRow;
}(inferno_component_1.default));
exports.TableRow = TableRow;
//# sourceMappingURL=table.js.map