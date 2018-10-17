import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const logging = () => next => action => {
  // eslint-disable-next-line no-console
  console.log(action.type);
  return next(action);
};

export default applyMiddleware(thunk, logging);
