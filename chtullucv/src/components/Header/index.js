import React from 'react';
import PropTypes from 'prop-types';
import data from './data';
import './index.css';

function Header(props) {
  const { language, onClick } = props;
  const { title, image, description, phone, email } = data[language];

  return (
    <header className="Header">
      <div className="Header-language-switch">
        <button type="button" onClick={() => onClick('en')}>
          English
        </button>
        <button type="button" onClick={() => onClick('kr')}>
          Korean
        </button>
      </div>
      <h1 className="Header-headline">{title}</h1>
      <hr />
      <img className="Header-image" src={image.src} alt={image.alt} />
      <div className="Header-content">
        {phone && (
          <p className="Header-contacts">
            <span>{phone.title}</span> {phone.value}
          </p>
        )}
        {email && (
          <p className="Header-contacts">
            <span>{email.value}</span> {email.value}
          </p>
        )}
        <p className="Header-description">{description}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;
