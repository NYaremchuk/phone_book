import React from 'react';
import './App.css';
import { IContact } from './types/interfaces';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';

const initialContacts: IContact[] = [
  {id: 1, name: 'Petro', phone: '+380986227722'},
  {id: 2, name: 'Vasyl', phone: '+380986227722'},
  {id: 3, name: 'Avtozapchastyny', phone: '+380986227722'},
  {id: 4, name: 'Advokat', phone: '+380986227722'},
  {id: 5, name: 'Byhgalter', phone: '+380986227722'},
  {id: 6, name: 'Zajchyk', phone: '+380986227722'},
];

type State = {
  contactsList: IContact[],
  newName: string,
  newPhone: string,
  allert: string,
}

class App extends React.Component<{}, State> {
  state: State = {
    contactsList: initialContacts,
    newName: '',
    newPhone: '',
    allert: '',
  };

  addContact = () => {
    const { newName, newPhone } = this.state;

    if (newName && newPhone) {
      let newId = this.state.contactsList.length +1;
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
        this.setState({allert: ''})
      }, 1500);
    }
  };

  deleteContact = (contactId: number) => {
    this.setState(state => ({
      contactsList: state.contactsList.filter(
        contact => contact.id !== contactId
        ),
        allert : '3',
    }));

    setTimeout(() => {
      this.setState({allert: ''})
    }, 1500);
  };

  editContact = (id: number, name: string, phone: string) => {
    this.setState(state => ({
      contactsList: state.contactsList.map(contact => {
        if (contact.id !== id) {
          return contact;
        }

        return { ...contact, name, phone };
      }),

      allert: '4',
    }));

    setTimeout(() => {
      this.setState({allert: ''})
    }, 1500);

    const activeForm = document.querySelector('.contact__edit-form.active');
    activeForm?.classList.remove('active');
    document.body.style.overflow = "visible";
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'newPhone' && (!isFinite(+value) && value !== '+')) {
      this.setState({ allert: '1' });
      return;
    } else {
      if (name === 'newName') {
        this.setState({ [name]: value });
      }
      if (name === 'newPhone') {
        this.setState({ [name]: value });
      }
    }

    this.state.allert = '';
  };


  render() {
    const { contactsList, newName, newPhone, allert } = this.state;
    const { handleChange, addContact, deleteContact, editContact } = this;

    return (
      <div className='App'>
        <Header />

        <Contacts
          contactsList={contactsList}
          newName={newName}
          newPhone={newPhone}
          handleChange={handleChange}
          addContact={addContact}
          deleteContact={deleteContact}
          editContact={editContact}
          allert={allert}
        />
      </div>
    )
  }
}

export default App;
