import React from 'react';
import PropTypes from 'prop-types';

function Checkout({ data }) {
  return (
    <div className="App-cart__container">
      <h1>List of items to buy</h1>
      <ol className="App-cart">
        {data.map((item, index) => (
          <li key={index} className="App-cart__item">
            <div className="App-cart__item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="App-cart__item-description">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

Checkout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Checkout;
