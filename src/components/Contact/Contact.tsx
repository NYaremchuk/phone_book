import React from 'react';
import './contact.css'
import { IContact } from '../../types/interfaces';
import { useState } from 'react';

type Props = {
  allert: string;
  contact: IContact;
  deleteContact: (id: number) => void;
  editContact: (id: number, name: string, phone: string) => void;
}

const Contact: React.FC<Props> = ({contact, allert, deleteContact, editContact}) => {

  const [editedName, setEditedName] = useState<string>(contact.name);
  const [editedPhone, setEditedPhone] = useState<string>(contact.phone);
  const [newAllert, setNewAllert] = useState<string>(allert);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'editedPhone' && !isFinite(+value)) {
      setNewAllert('1');
      return;
    } else {
      if (name === 'editedPhone') {
        setEditedPhone(value);
      }
      if (name === 'editedName') {
        setEditedName(value);
      }
    }
    setNewAllert('');
  };

  const hundleClick = (event: { currentTarget: Element; }) => {
    const form = document.querySelectorAll('.contact__edit-form');
    const buttonEdit = document.querySelectorAll('#button-edit');

    for (let i = 0; i < buttonEdit.length; i++) {
      if (event.currentTarget === buttonEdit[i]) {
          form[i].classList.toggle('active');
          document.body.style.overflow = "hidden";
      }
    }
  }

  const removeActive = () => {
    const activeForm = document.querySelector('.contact__edit-form.active');
    activeForm?.classList.remove('active');
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <div className='contacts__content-holder'>
        <div className='contacts__content-id'>
          <h5>№:</h5>
          <span>{contact.id}</span>
        </div>
        <div className='contacts__content-name'>
          <h5>Ім'я:</h5>
          <span>{contact.name}</span>
        </div>
        <div className='contacts__content-phone'>
          <h5>Телефон:</h5>
          <span>{contact.phone}</span>
        </div>
      </div>


      <form
        className='contact__edit-form'
        onSubmit={(event) => {
          event.preventDefault();
          editContact(contact.id, editedName, editedPhone)
        }}
      >
        <div className='contact__edit-form-wrapper'>
          <input
            type="text"
            name='editedName'
            placeholder="Змінити ім'я"
            value={editedName}
            onChange={handleChange}
          />
          <input
            type="text"
            name='editedPhone'
            placeholder="Змінити номер телефону"
            value={editedPhone}
            onChange={handleChange}
          />
          <button className='contact__edit-form-button'>Застосувати зміни</button>
          <button onClick={removeActive} type='button' className='contact__edit-form-button'>Скасувати</button>
        </div>
      </form>

      <div className='contacts__content-button-holder'>
        <button
          id='button-edit'
          className='button-delete'
          onClick={hundleClick}
        >
          <i className='icon-pencil'></i>
        </button>
        <button
          className='button-delete'
          onClick={() => deleteContact(contact.id)}
        >
          <i className='icon-bin'></i>
        </button>
      </div>

    </>
  );
}

export default Contact;