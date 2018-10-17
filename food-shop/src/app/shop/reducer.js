import * as types from './actionTypes';

const DEFAULT_ERROR = 'Failed to fetch data';
const INITIAL_STATE = {
  favorites: [],
  cart: [],
  products: [],
  error: null,
  fetching: false,
};

export default (state = INITIAL_STATE, action) => {
  const { type, data } = action;

  switch (type) {
    case types.ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, data] };
    case types.ADD_TO_CART:
      return { ...state, cart: [...state.cart, data] };
    case types.GET_PRODUCTS:
      return { ...state, fetching: true };
    case types.SET_PRODUCTS:
      return { ...state, products: data, fetching: false };
    case types.SET_PRODUCTS_ERROR:
      return { ...state, error: DEFAULT_ERROR, fetching: false };
    default:
      return state;
  }
};
