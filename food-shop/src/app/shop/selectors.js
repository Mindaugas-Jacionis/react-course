import { NAME } from './constants';

export const getProducts = state => state[NAME].products;
export const getFavorites = state => state[NAME].favorites;
export const getCart = state => state[NAME].cart;
export const getError = state => state[NAME].error;
