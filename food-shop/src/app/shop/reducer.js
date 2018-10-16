import * as types from './actionTypes';

const INITIAL_STATE = {
  favorites: [],
  cart: [],
  products: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, data } = action;

  switch (type) {
    case types.ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, data] };
    case types.ADD_TO_CART:
      return { ...state, cart: [...state.cart, data] };
    case types.SET_PRODUCTS:
      return { ...state, products: data };
    case types.SET_PRODUCTS_ERROR:
      return { ...state, error: data };
    default:
      return state;
  }
};
