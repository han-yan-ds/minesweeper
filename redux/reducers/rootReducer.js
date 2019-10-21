import {combineReducers} from 'redux';
// import other reducers
import {
  boardArr,
  gameState,
  numMines,
  numFlagged,
  remainingSafe,
  currentView,
} from './reducer';

export default combineReducers({
  // other reducers
  boardArr,
  numMines,
  numFlagged,
  gameState,
  remainingSafe,
  currentView,
});