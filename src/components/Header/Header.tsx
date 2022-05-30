import './header.css';
import React from 'react';

function Header() {
  return (
      <header className="header">
        <div className='container header__container'>
          <div className='header__logo'>
            <img src="../../images/phone_book-logo.png" alt="Phone book"/>
          </div>
          <div className='header__title'>
            <h2>Phone Book</h2>
            <span>Keep your phones in one place</span>
          </div>
        </div>
      </header>
  );
}

export default Header;
