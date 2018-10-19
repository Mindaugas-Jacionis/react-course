import { combineReducers } from 'redux';

import issues from '../issues';

export default combineReducers({
  [issues.constants.NAME]: issues.reducer,
});
