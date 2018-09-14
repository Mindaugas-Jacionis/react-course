import React from 'react';
import data from './data';
import './index.css';

function Header() {
  const { title, image, description, phone, email } = data;

  return (
    <header className="Header">
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

export default Header;
