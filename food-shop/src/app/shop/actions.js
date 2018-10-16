import * as types from './actionTypes';

const DEFAULT_ERROR = 'Failed to fetch data';

const addToCart = data => ({ type: types.ADD_TO_CART, data });
const addToFavorites = data => ({ type: types.ADD_TO_FAVORITES, data });

const setProducts = data => ({ type: types.SET_PRODUCTS, data });

const setProductsError = () => ({
  type: types.SET_PRODUCTS_ERROR,
  data: DEFAULT_ERROR,
});

const actions = { addToCart, addToFavorites, setProducts, setProductsError };

export default actions;
