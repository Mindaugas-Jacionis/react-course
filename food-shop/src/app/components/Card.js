import React from 'react';
import PropTypes from 'prop-types';

const FontAwesome = require('react-fontawesome');

function Card({ addToFavorites, addToCart, data }) {
  const { image, name, price, currencySymbol, description } = data;

  return (
    <section className="App-card">
      <img src={image} alt={name} />
      <div className="App-card__text">
        <h3>{name}</h3>
        <div className="App-card__details">
          <div className="App-card__price">
            <span>{price} </span>
            <span>{currencySymbol}</span>
          </div>
          <div className="App-card__icons">
            <FontAwesome name="heart" onClick={() => addToFavorites(data)} />
            <FontAwesome name="cart-plus" onClick={() => addToCart(data)} />
          </div>
        </div>
        <div className="App-card__description">
          {description.substring(0, 50)}
          ...
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.shape({}).isRequired,
  addToFavorites: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Card;
