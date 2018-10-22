import { applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

const middlewares = [apiMiddleware];

export default applyMiddleware(...middlewares);
