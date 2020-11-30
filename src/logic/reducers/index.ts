import { combineReducers } from 'redux';
import infosReducer from './infosReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  infos: infosReducer,
  search: searchReducer,
});

export default rootReducer;
