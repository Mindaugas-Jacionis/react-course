import { createStore } from 'redux';
import getMiddlewares from './getMiddlewares';
import reducers from './reducers';

const store = createStore(reducers, getMiddlewares);

export default store;
