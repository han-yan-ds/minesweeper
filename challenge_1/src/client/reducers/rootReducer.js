import { combineReducers } from 'redux';
// import other reducers
import {searchResult, searchQuery, numPaginatedPages} from './reducers';

export default combineReducers({
  searchResult,
  searchQuery,
  numPaginatedPages,
});