import { combineReducers } from 'redux';
import TempReducer from './tempReducer';

export default combineReducers({
  temp: TempReducer,
});