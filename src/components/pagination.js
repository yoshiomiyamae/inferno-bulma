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
var Pagination = (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        return (inferno_create_element_1.default("nav", { className: common_1.classNameBuilder(['pagination',
                this.props.size,
                this.props.alignment,
            ]) }, this.props.children));
    };
    return Pagination;
}(inferno_component_1.default));
exports.Pagination = Pagination;
var PaginationPrevious = (function (_super) {
    __extends(PaginationPrevious, _super);
    function PaginationPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationPrevious.prototype.render = function () {
        return (inferno_create_element_1.default("a", __assign({ className: common_1.classNameBuilder(['pagination-previous']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    };
    return PaginationPrevious;
}(inferno_component_1.default));
exports.PaginationPrevious = PaginationPrevious;
var PaginationNext = (function (_super) {
    __extends(PaginationNext, _super);
    function PaginationNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationNext.prototype.render = function () {
        return (inferno_create_element_1.default("a", __assign({ className: common_1.classNameBuilder(['pagination-next']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    };
    return PaginationNext;
}(inferno_component_1.default));
exports.PaginationNext = PaginationNext;
var PaginationList = (function (_super) {
    __extends(PaginationList, _super);
    function PaginationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationList.prototype.render = function () {
        return (inferno_create_element_1.default("ul", { className: common_1.classNameBuilder(['pagination-list']) }, this.props.children));
    };
    return PaginationList;
}(inferno_component_1.default));
exports.PaginationList = PaginationList;
var PaginationLink = (function (_super) {
    __extends(PaginationLink, _super);
    function PaginationLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationLink.prototype.render = function () {
        return (inferno_create_element_1.default("li", null,
            inferno_create_element_1.default("a", __assign({ className: common_1.classNameBuilder(['pagination-link',
                    (this.props.current ? 'is-current' : '')
                ]) }, common_1.getEventHandlerFromProps(this.props)), this.props.children)));
    };
    return PaginationLink;
}(inferno_component_1.default));
exports.PaginationLink = PaginationLink;
var PaginationEllipsis = (function (_super) {
    __extends(PaginationEllipsis, _super);
    function PaginationEllipsis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationEllipsis.prototype.render = function () {
        return (inferno_create_element_1.default("li", null,
            inferno_create_element_1.default("span", { className: common_1.classNameBuilder(['pagination-ellipsis']) }, (this.props.children ? this.props.children : '&hellip;'))));
    };
    return PaginationEllipsis;
}(inferno_component_1.default));
exports.PaginationEllipsis = PaginationEllipsis;
//# sourceMappingURL=pagination.js.map