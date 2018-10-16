import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shop from '../shop';

function Favourites(props) {
  const { favorites } = props;

  return (
    <div className="App-fav__container">
      <h1>List of favourite items</h1>
      <ol className="App-fav">
        {favorites.map((item, index) => (
          <li key={index} className="App-fav__item">
            <div className="App-fav__item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="App-fav__item-description">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

Favourites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  favorites: shop.selectors.getFavorites(state),
});

export default connect(mapStateToProps)(Favourites);
