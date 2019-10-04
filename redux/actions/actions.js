// IMPORT code logic that uncovers the rest of the cells around it if empty

import {uncoverBoard, flagCell} from '../../util/boardUtilities';
import boardInitializer from '../../util/boardInitializer';

function newGameAction (width = 10, height = 10, numMines = 15) {
  return {
    type: 'NEW_GAME',
    board: boardInitializer(width, height, numMines),
    numMines,
  }
}

function uncoverCellAction(board, row, col, winCb, loseCb) {
  return {
    type: 'UNCOVER_CELL',
    board: uncoverBoard(board, row, col, winCb, loseCb),
  }
}

function flagCellAction(board, row, col) {
  return {
    type: 'FLAG_CELL',
    board: flagCell(board, row, col),
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

export {
  newGameAction,
  uncoverCellAction,
  flagCellAction,
  winGameAction,
  loseGameAction,
}