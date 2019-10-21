// IMPORT code logic that uncovers the rest of the cells around it if empty

import {uncoverBoard, flagCell, countFlagged} from '../../util/boardUtilities';
import boardInitializer from '../../util/boardInitializer';
import defaultParams from '../../util/defaultBoardParams';

function newGameAction (width = defaultParams.width, height = defaultParams.height, numMines = defaultParams.numMines) {
  return {
    type: 'NEW_GAME',
    board: boardInitializer(width, height, numMines),
    numMines,
    remainingSafe: width * height - numMines,
  }
}

function updateRemainingSafeAction (remainingSafe) {
  return {
    type: 'UPDATE_REMAINING_SAFE',
    remainingSafe,
  }
}

function uncoverCellAction(board, row, col, winCb, loseCb, updateRemainingCb) {
  return {
    type: 'UNCOVER_CELL',
    board: uncoverBoard(board, row, col, winCb, loseCb, updateRemainingCb),
  }
}

function flagCellAction(board, row, col) {
  return {
    type: 'FLAG_CELL',
    board: flagCell(board, row, col),
  }
}

function updateNumFlagsAction(board) {
  return {
    type: 'COUNT_FLAGS',
    count: countFlagged(board),
  }
}

function winGameAction() {
  return {
    type: 'WIN_GAME',
  }
}

function loseGameAction() {
  return {
    type: 'LOSE_GAME',
  }
}

function switchViewAction(currentView) {
  return {
    type: 'SWITCH_SCREEN',
    currentView: (currentView === 'play') ? 'help' : 'play',
  }
}

export {
  newGameAction,
  updateRemainingSafeAction,
  uncoverCellAction,
  flagCellAction,
  updateNumFlagsAction,
  winGameAction,
  loseGameAction,
  switchViewAction,
}