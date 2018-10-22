import { createStore } from 'redux';
import reducers from './reducers';
import getMiddlewares from './getMiddlewares';

const store = createStore(reducers, getMiddlewares);

export default store;
