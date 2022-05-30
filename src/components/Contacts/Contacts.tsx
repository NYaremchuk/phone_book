import NewContact from '../NewContact/NewContact';
import './contacts.css';
import '../../vendors/style.css'
import Contact from '../Contact/Contact';
import { IContacts } from '../../types/interfaces';
import React from 'react';


type Props = IContacts;

const Contacts: React.FC<Props> = ({
    contactsList,
    newName,
    newPhone,
    handleChange,
    addContact,
    deleteContact,
    allert,
    editContact
  }) => {

  const visibleContacts = contactsList.filter (
    contact => (
      contact.name.toLowerCase().includes(newName.toLowerCase())
    ));
  
  return (
    <div className='container'>
      <NewContact
        newName={newName}
        newPhone={newPhone}
        handleChange={handleChange}
        addContact={addContact}
        allert={allert}
      />
      <ul className='contacts__content'>
        {visibleContacts.map(
          contact => (
            <li key={contact.id}>
              <Contact
                allert={allert}
                deleteContact={deleteContact}
                contact={contact}
                editContact={editContact}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Contacts;