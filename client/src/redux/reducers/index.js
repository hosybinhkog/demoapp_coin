import { combineReducers } from 'redux';
import userReducer, { registerReducer } from './user.reducer';

export default combineReducers({
  user: userReducer,
  register: registerReducer,
});
