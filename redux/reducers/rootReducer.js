import {combineReducers} from 'redux';
// import other reducers
import {boardArr, gameState, numMines} from './reducer';

export default combineReducers({
  // other reducers
  boardArr,
  numMines,
  gameState,
});