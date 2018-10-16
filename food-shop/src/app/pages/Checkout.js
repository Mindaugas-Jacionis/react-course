import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shop from '../shop';

function Checkout({ cart }) {
  return (
    <div className="App-cart__container">
      <h1>List of items to buy</h1>
      <ol className="App-cart">
        {cart.map((item, index) => (
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
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  cart: shop.selectors.getCart(state),
});

export default connect(mapStateToProps)(Checkout);
