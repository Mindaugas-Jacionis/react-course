import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const loggingMiddleware = () => next => action => {
  console.log(action.type);
  return next(action);
};

const store = createStore(reducers, applyMiddleware(loggingMiddleware));

export default store;
