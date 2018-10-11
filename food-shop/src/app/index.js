import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';

import './style/index.css';

const DEFAULT_ERROR = 'Failed to fetch data';
const ROUTES = ['home', 'favorites', 'checkout'];
const ENDPOINT =
  'https://boiling-reaches-93648.herokuapp.com/food-shop/products';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'home',
      all: [],
      favorites: [],
      cart: [],
      error: undefined,
    };
  }

  componentDidMount() {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(all => this.setState({ all }))
      .catch(() => this.setState({ error: DEFAULT_ERROR }));
  }

  addToFavorites = item => {
    const { favorites } = this.state;

    this.setState({ favorites: [...favorites, item] });
  };

  addToCart = item => {
    const { cart } = this.state;

    this.setState({ cart: [...cart, item] });
  };

  changeRoute = route => this.setState({ route });

  renderContent = () => {
    const { route, all, favorites, cart } = this.state;

    switch (route) {
      case 'home':
        return (
          <Home
            data={all}
            favorites={favorites}
            cart={cart}
            addToCart={this.addToCart}
            addToFavorites={this.addToFavorites}
          />
        );
      case 'favorites':
        return <Favorites data={favorites} />;
      case 'checkout':
        return <Checkout data={cart} />;
      default:
        return <PageNotFound />;
    }
  };

  render() {
    const { all, favorites, cart, error } = this.state;

    return (
      <div className="App-container">
        <Navbar routes={ROUTES} changeRoute={this.changeRoute} />
        {error && <h1>{error}</h1>}
        <div>
          <Router>
            <React.Fragment>
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    data={all}
                    favorites={favorites}
                    cart={cart}
                    addToCart={this.addToCart}
                    addToFavorites={this.addToFavorites}
                  />
                )}
              />
              <Route
                exact
                path="/favorites"
                render={() => <Favorites data={favorites} />}
              />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
