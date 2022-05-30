import React, { useState } from 'react';
import './newContact.css';

type Props = {
  newName: string;
  newPhone: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addContact: () => void;
  allert: string;
}

const NewContact: React.FC<Props> = ({ newName, newPhone, handleChange, addContact, allert}) => {

  const [rotateValue, setRotateValue] = useState<boolean>(false);

  const rotateValue1 = 'rotate(45deg)';
  const rotateValue2 = 'rotate(-135deg)';

  const handleClick = () => {
    const content = document.querySelector('.new-contact__content');
    content?.classList.toggle('active');

    setRotateValue( !rotateValue );
  }

  const renderSwitchAllerts = (allert: string) => {
    switch(allert) {
      case '1':
        return <p className='allert'>В полі "Номер телефону" доступні лише цифри!</p>;
      case '2':
        return <p className='allert allert-success'>Контакт успішно додано!</p>;
      case '3':
        return <p className='allert allert-success'>Контакт успішно видалено!</p>;
      case '4':
        return <p className='allert allert-success'>Контакт успішно змінено!</p>;
    }
  }

    const rotate = {
      transform: rotateValue ? rotateValue1 : rotateValue2,
    }

    return (
      <div className='new-contact'>
        <div
          className='new-contact__arrow-holder'
          onClick={handleClick}
        >
          <span
            style={rotate}
            className='new-contact__arrow'
          ></span>
        </div>
        <div className='new-contact__content active'>
          <form onSubmit={(event) => {
            event.preventDefault();
            addContact();
          }}>
            <input
              className='new-contact__input'
              type="text"
              name='newName'
              placeholder="Введіть ім'я"
              value={newName}
              onChange={handleChange}
              required
            />
            <input
              className='new-contact__input'
              type="text"
              name='newPhone'
              placeholder='Введіть номер телефону'
              value={newPhone}
              onChange={handleChange}
              required
            />
            <button className='new-contact__button new-contact__input' type='submit'>Додати контакт</button>
          </form>
          <div className='allert-holder'>
            {renderSwitchAllerts(allert)}
          </div>
        </div>
      </div>
    );

}

export default NewContact;