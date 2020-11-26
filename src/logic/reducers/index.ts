import { combineReducers } from 'redux';
import infosReducer from './infosReducer';

const rootReducer = combineReducers({
  infos: infosReducer,
});

export default rootReducer;
