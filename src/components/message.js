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
var Message = (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.render = function () {
        return (inferno_create_element_1.default("article", { className: common_1.classNameBuilder(['message',
                this.props.color,
                this.props.size
            ]) }, this.props.children));
    };
    return Message;
}(inferno_component_1.default));
exports.Message = Message;
var MessageHeader = (function (_super) {
    __extends(MessageHeader, _super);
    function MessageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageHeader.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['message-header']) }, this.props.children));
    };
    return MessageHeader;
}(inferno_component_1.default));
exports.MessageHeader = MessageHeader;
var MessageBody = (function (_super) {
    __extends(MessageBody, _super);
    function MessageBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBody.prototype.render = function () {
        return (inferno_create_element_1.default("div", { className: common_1.classNameBuilder(['message-body']) }, this.props.children));
    };
    return MessageBody;
}(inferno_component_1.default));
exports.MessageBody = MessageBody;
//# sourceMappingURL=message.js.map