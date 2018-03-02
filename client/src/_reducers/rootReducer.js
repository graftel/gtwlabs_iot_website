import { combineReducers } from 'redux'

import { login } from './loginReducer'
import { alert } from './alertReducer'
import { reg } from './regReducer'
import { reset } from './resetReducer'
import { data } from './dataReducer'

const rootReducer = combineReducers({
  reg,
  login,
  alert,
  reset,
  data
});

export default rootReducer;