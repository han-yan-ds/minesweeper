import {combineReducers} from 'redux';
// import other reducers
import {
  boardArr,
  gameState,
  numMines,
  remainingSafe,
  currentView,
} from './reducer';

export default combineReducers({
  // other reducers
  boardArr,
  numMines,
  gameState,
  remainingSafe,
  currentView,
});