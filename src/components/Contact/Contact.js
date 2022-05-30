"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./contact.css");
const react_2 = require("react");
const Contact = ({ contact, allert, deleteContact, editContact }) => {
    const [editedName, setEditedName] = (0, react_2.useState)(contact.name);
    const [editedPhone, setEditedPhone] = (0, react_2.useState)(contact.phone);
    const [newAllert, setNewAllert] = (0, react_2.useState)(allert);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'editedPhone' && !isFinite(+value)) {
            setNewAllert('1');
            return;
        }
        else {
            if (name === 'editedPhone') {
                setEditedPhone(value);
            }
            if (name === 'editedName') {
                setEditedName(value);
            }
        }
        setNewAllert('');
    };
    const hundleClick = (event) => {
        const form = document.querySelectorAll('.contact__edit-form');
        const buttonEdit = document.querySelectorAll('#button-edit');
        for (let i = 0; i < buttonEdit.length; i++) {
            if (event.currentTarget === buttonEdit[i]) {
                form[i].classList.toggle('active');
                document.body.style.overflow = "hidden";
            }
        }
    };
    const removeActive = () => {
        const activeForm = document.querySelector('.contact__edit-form.active');
        activeForm === null || activeForm === void 0 ? void 0 : activeForm.classList.remove('active');
        document.body.style.overflow = "visible";
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'contacts__content-holder' },
            react_1.default.createElement("div", { className: 'contacts__content-id' },
                react_1.default.createElement("h5", null, "\u2116:"),
                react_1.default.createElement("span", null, contact.id)),
            react_1.default.createElement("div", { className: 'contacts__content-name' },
                react_1.default.createElement("h5", null, "\u0406\u043C'\u044F:"),
                react_1.default.createElement("span", null, contact.name)),
            react_1.default.createElement("div", { className: 'contacts__content-phone' },
                react_1.default.createElement("h5", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),
                react_1.default.createElement("span", null, contact.phone))),
        react_1.default.createElement("form", { className: 'contact__edit-form', onSubmit: (event) => {
                event.preventDefault();
                editContact(contact.id, editedName, editedPhone);
            } },
            react_1.default.createElement("div", { className: 'contact__edit-form-wrapper' },
                react_1.default.createElement("input", { type: "text", name: 'editedName', placeholder: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0456\u043C'\u044F", value: editedName, onChange: handleChange }),
                react_1.default.createElement("input", { type: "text", name: 'editedPhone', placeholder: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443", value: editedPhone, onChange: handleChange }),
                react_1.default.createElement("button", { className: 'contact__edit-form-button' }, "\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438 \u0437\u043C\u0456\u043D\u0438"),
                react_1.default.createElement("button", { onClick: removeActive, type: 'button', className: 'contact__edit-form-button' }, "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"))),
        react_1.default.createElement("div", { className: 'contacts__content-button-holder' },
            react_1.default.createElement("button", { id: 'button-edit', className: 'button-delete', onClick: hundleClick },
                react_1.default.createElement("i", { className: 'icon-pencil' })),
            react_1.default.createElement("button", { className: 'button-delete', onClick: () => deleteContact(contact.id) },
                react_1.default.createElement("i", { className: 'icon-bin' })))));
};
exports.default = Contact;
