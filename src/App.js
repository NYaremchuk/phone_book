"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Header_1 = __importDefault(require("./components/Header/Header"));
const Contacts_1 = __importDefault(require("./components/Contacts/Contacts"));
const initialContacts = [
    { id: 1, name: 'Petro', phone: '+380986227722' },
    { id: 2, name: 'Vasyl', phone: '+380986227722' },
    { id: 3, name: 'Avtozapchastyny', phone: '+380986227722' },
    { id: 4, name: 'Advokat', phone: '+380986227722' },
    { id: 5, name: 'Byhgalter', phone: '+380986227722' },
    { id: 6, name: 'Zajchyk', phone: '+380986227722' },
];
class App extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            contactsList: initialContacts,
            newName: '',
            newPhone: '',
            allert: '',
        };
        this.addContact = () => {
            const { newName, newPhone } = this.state;
            if (newName && newPhone) {
                let newId = this.state.contactsList.length + 1;
                const newContact = { id: newId, name: newName, phone: newPhone };
                this.setState(state => ({
                    contactsList: [
                        ...state.contactsList,
                        newContact,
                    ],
                    allert: '2',
                    newName: '',
                    newPhone: '',
                }));
                setTimeout(() => {
                    this.setState({ allert: '' });
                }, 1500);
            }
        };
        this.deleteContact = (contactId) => {
            this.setState(state => ({
                contactsList: state.contactsList.filter(contact => contact.id !== contactId),
                allert: '3',
            }));
            setTimeout(() => {
                this.setState({ allert: '' });
            }, 1500);
        };
        this.editContact = (id, name, phone) => {
            this.setState(state => ({
                contactsList: state.contactsList.map(contact => {
                    if (contact.id !== id) {
                        return contact;
                    }
                    return Object.assign(Object.assign({}, contact), { name, phone });
                }),
                allert: '4',
            }));
            setTimeout(() => {
                this.setState({ allert: '' });
            }, 1500);
            const activeForm = document.querySelector('.contact__edit-form.active');
            activeForm === null || activeForm === void 0 ? void 0 : activeForm.classList.remove('active');
            document.body.style.overflow = "visible";
        };
        this.handleChange = (e) => {
            const { name, value } = e.target;
            if (name === 'newPhone' && (!isFinite(+value) && value !== '+')) {
                this.setState({ allert: '1' });
                return;
            }
            else {
                if (name === 'newName') {
                    this.setState({ [name]: value });
                }
                if (name === 'newPhone') {
                    this.setState({ [name]: value });
                }
            }
            this.state.allert = '';
        };
    }
    render() {
        const { contactsList, newName, newPhone, allert } = this.state;
        const { handleChange, addContact, deleteContact, editContact } = this;
        return (react_1.default.createElement("div", { className: 'App' },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(Contacts_1.default, { contactsList: contactsList, newName: newName, newPhone: newPhone, handleChange: handleChange, addContact: addContact, deleteContact: deleteContact, editContact: editContact, allert: allert })));
    }
}
exports.default = App;
