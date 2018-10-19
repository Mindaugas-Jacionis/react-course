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
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, payload] };
    case types.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case types.GET_PRODUCTS:
      return { ...state, fetching: true };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, products: payload, fetching: false };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, error: DEFAULT_ERROR, fetching: false };
    default:
      return state;
  }
};
