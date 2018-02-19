import { combineReducers } from 'redux';

import { login } from './loginReducer';
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  login,
  alert
});

export default rootReducer;