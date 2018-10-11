import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ routes }) {
  return (
    <ul className="App-navbar">
      {routes.map((route, index) => (
        <li className="App-navbar__item" key={index}>
          <Link to={`/${route}`}>{route}</Link>
        </li>
      ))}
    </ul>
  );
}

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
