// import {defaultWidth, defaultHeight, defaultNumMines} from '../../util/defaultBoardParams';
import defaultParams from '../../util/defaultBoardParams';

function boardArr (board = [[0]], action) {
  switch (action.type) {
    case 'UNCOVER_CELL':
      return action.board;
    case 'FLAG_CELL':
      return action.board;
    case 'NEW_GAME':
      return action.board;
    default:
      return board;
  }
}

function gameState (gameSt = 0, action) {
  switch (action.type) {
    case 'WIN_GAME':
      return 1;
    case 'LOSE_GAME':
      return -1;
    case 'NEW_GAME':
      return 0;
    default:
      return gameSt;
  }
}

function numMines (num = defaultParams.numMines, action) {
  switch (action.type) {
    case 'NEW_GAME':
      return action.numMines;
    default:
      return num;
  }
}

function remainingSafe (num = defaultParams.width * defaultParams.height - defaultParams.numMines, action) {
  switch (action.type) {
    case 'NEW_GAME':
      return action.remainingSafe;
    case 'UPDATE_REMAINING_SAFE':
      return action.remainingSafe;
    default:
      return num;
  }
}

function currentView (view = 'play', action) {
  switch (action.type) {
    case 'SWITCH_SCREEN':
      return action.currentView;
    default:
      return view;
  }
}

export {
  boardArr,
  gameState,
  numMines,
  remainingSafe,
  currentView,
}