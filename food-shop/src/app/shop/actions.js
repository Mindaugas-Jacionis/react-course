import * as types from './actionTypes';

const ENDPOINT =
  'https://boiling-reaches-93648.herokuapp.com/food-shop/products';

export const addToCart = data => ({ type: types.ADD_TO_CART, data });
export const addToFavorites = data => ({ type: types.ADD_TO_FAVORITES, data });

export const getProducts = () => dispatch => {
  dispatch({ type: types.GET_PRODUCTS });

  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => dispatch({ type: types.SET_PRODUCTS, data }))
    .catch(() => dispatch({ type: types.SET_PRODUCTS_ERROR }));
};
