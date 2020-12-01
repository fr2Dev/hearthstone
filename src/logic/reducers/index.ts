import { combineReducers } from 'redux';
import infosReducer from './infosReducer';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  infos: infosReducer,
  search: searchReducer,
  filters: filterReducer,
});

export default rootReducer;
