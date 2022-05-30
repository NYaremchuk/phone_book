"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./newContact.css");
const NewContact = ({ newName, newPhone, handleChange, addContact, allert }) => {
    const [rotateValue, setRotateValue] = (0, react_1.useState)(false);
    const rotateValue1 = 'rotate(45deg)';
    const rotateValue2 = 'rotate(-135deg)';
    const handleClick = () => {
        const content = document.querySelector('.new-contact__content');
        content === null || content === void 0 ? void 0 : content.classList.toggle('active');
        setRotateValue(!rotateValue);
    };
    const renderSwitchAllerts = (allert) => {
        switch (allert) {
            case '1':
                return react_1.default.createElement("p", { className: 'allert' }, "\u0412 \u043F\u043E\u043B\u0456 \"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\" \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u043B\u0438\u0448\u0435 \u0446\u0438\u0444\u0440\u0438!");
            case '2':
                return react_1.default.createElement("p", { className: 'allert allert-success' }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0434\u043E\u0434\u0430\u043D\u043E!");
            case '3':
                return react_1.default.createElement("p", { className: 'allert allert-success' }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!");
            case '4':
                return react_1.default.createElement("p", { className: 'allert allert-success' }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E!");
        }
    };
    const rotate = {
        transform: rotateValue ? rotateValue1 : rotateValue2,
    };
    return (react_1.default.createElement("div", { className: 'new-contact' },
        react_1.default.createElement("div", { className: 'new-contact__arrow-holder', onClick: handleClick },
            react_1.default.createElement("span", { style: rotate, className: 'new-contact__arrow' })),
        react_1.default.createElement("div", { className: 'new-contact__content active' },
            react_1.default.createElement("form", { onSubmit: (event) => {
                    event.preventDefault();
                    addContact();
                } },
                react_1.default.createElement("input", { className: 'new-contact__input', type: "text", name: 'newName', placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F", value: newName, onChange: handleChange, required: true }),
                react_1.default.createElement("input", { className: 'new-contact__input', type: "text", name: 'newPhone', placeholder: '\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443', value: newPhone, onChange: handleChange, required: true }),
                react_1.default.createElement("button", { className: 'new-contact__button new-contact__input', type: 'submit' }, "\u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442")),
            react_1.default.createElement("div", { className: 'allert-holder' }, renderSwitchAllerts(allert)))));
};
exports.default = NewContact;
