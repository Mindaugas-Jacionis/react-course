import { combineReducers } from 'redux';
import shop from '../shop';

export default combineReducers({
  [shop.constants.NAME]: shop.reducer,
});
