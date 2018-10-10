import React from 'react';
import PropTypes from 'prop-types';

function Favourites(props) {
  const { data } = props;

  return (
    <div className="App-fav__container">
      <h1>List of favourite items</h1>
      <ol className="App-fav">
        {data.map((item, index) => (
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
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Favourites;
