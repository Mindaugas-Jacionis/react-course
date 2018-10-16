import React from 'react';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';

import shop from './shop';

import './style/index.css';

const ROUTES = ['home', 'favorites', 'checkout'];
const ENDPOINT =
  'https://boiling-reaches-93648.herokuapp.com/food-shop/products';

class App extends React.Component {
  componentDidMount() {
    const { setProducts, setProductsError, products } = this.props;

    if (!products.length) {
      fetch(ENDPOINT)
        .then(response => response.json())
        .then(all => setProducts(all))
        .catch(() => setProductsError());
    }
  }

  render() {
    const { error } = this.props;

    return (
      <div className="App-container">
        <Navbar routes={ROUTES} changeRoute={this.changeRoute} />
        {error && <h1>{error}</h1>}
        <div>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Redirect exact from="/" to="/home" />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/404" component={PageNotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  setProducts: PropTypes.func.isRequired,
  setProductsError: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  error: PropTypes.string,
};

App.defaultProps = {
  error: undefined,
};

const enhance = compose(
  withRouter,
  connect(
    state => ({
      products: shop.selectors.getProducts(state),
      error: shop.selectors.getError(state),
    }),
    dispatch =>
      bindActionCreators(
        {
          setProducts: shop.actions.setProducts,
          setProductsError: shop.actions.setProductsError,
        },
        dispatch
      )
  )
);

export default enhance(App);
