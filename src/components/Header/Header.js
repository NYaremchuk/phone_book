"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./header.css");
const react_1 = __importDefault(require("react"));
function Header() {
    return (react_1.default.createElement("header", { className: "header" },
        react_1.default.createElement("div", { className: 'container header__container' },
            react_1.default.createElement("div", { className: 'header__logo' },
                react_1.default.createElement("img", { src: "../../images/phone_book-logo.png", alt: "Phone book" })),
            react_1.default.createElement("div", { className: 'header__title' },
                react_1.default.createElement("h2", null, "Phone Book"),
                react_1.default.createElement("span", null, "Keep your phones in one place")))));
}
exports.default = Header;
