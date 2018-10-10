import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

function Home(props) {
  const { cart, data, favorites, addToCart, addToFavorites } = props;

  return (
    <main className="App-home">
      {data.map((card, index) => (
        <Card
          data={card}
          key={index}
          cart={cart}
          favorites={favorites}
          sendData={() => {}}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
        />
      ))}
    </main>
  );
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addToCart: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
};

export default Home;
