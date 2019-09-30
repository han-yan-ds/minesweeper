import { combineReducers } from 'redux';
// import other reducers
import {searchResult, searchQuery} from './reducers';

export default combineReducers({
  searchResult,
  searchQuery,
});