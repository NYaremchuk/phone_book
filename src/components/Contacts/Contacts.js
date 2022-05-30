"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewContact_1 = __importDefault(require("../NewContact/NewContact"));
require("./contacts.css");
require("../../vendors/style.css");
const Contact_1 = __importDefault(require("../Contact/Contact"));
const react_1 = __importDefault(require("react"));
const Contacts = ({ contactsList, newName, newPhone, handleChange, addContact, deleteContact, allert, editContact }) => {
    const visibleContacts = contactsList.filter(contact => (contact.name.toLowerCase().includes(newName.toLowerCase())));
    return (react_1.default.createElement("div", { className: 'container' },
        react_1.default.createElement(NewContact_1.default, { newName: newName, newPhone: newPhone, handleChange: handleChange, addContact: addContact, allert: allert }),
        react_1.default.createElement("ul", { className: 'contacts__content' }, visibleContacts.map(contact => (react_1.default.createElement("li", { key: contact.id },
            react_1.default.createElement(Contact_1.default, { allert: allert, deleteContact: deleteContact, contact: contact, editContact: editContact })))))));
};
exports.default = Contacts;
