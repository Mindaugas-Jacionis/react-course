import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// const loggingMiddleware = () => next => action => {
//   console.log(action.type);
//   return next(action);
// };

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
