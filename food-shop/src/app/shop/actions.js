import { RSAA } from 'redux-api-middleware';
import * as types from './actionTypes';

const ENDPOINT =
  'https://boiling-reaches-93648.herokuapp.com/food-shop/products';

export const addToCart = payload => ({ type: types.ADD_TO_CART, payload });
export const addToFavorites = payload => ({
  type: types.ADD_TO_FAVORITES,
  payload,
});

export const getProducts = () => ({
  [RSAA]: {
    endpoint: ENDPOINT,
    method: 'GET',
    types: [
      types.GET_PRODUCTS,
      types.GET_PRODUCTS_SUCCESS,
      types.GET_PRODUCTS_FAILURE,
    ],
  },
});
