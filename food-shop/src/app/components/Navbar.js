import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ routes, changeRoute }) {
  return (
    <ul className="App-navbar">
      {routes.map((route, index) => (
        <li className="App-navbar__item" key={index}>
          {/* eslint-disable */}
          <a onClick={() => changeRoute(route)}>{route}</a>
          {/* eslint-enable */}
        </li>
      ))}
    </ul>
  );
}

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeRoute: PropTypes.func.isRequired,
};

export default Navbar;
