// IMPORT code logic that uncovers the rest of the cells around it if empty

import {uncoverBoard} from '../../util/boardUtilities';

function uncoverCellAction(board, row, col, winCb, loseCb) {
  return {
    type: 'UNCOVER_CELL',
    board: uncoverBoard(board, row, col, winCb, loseCb),
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
  uncoverCellAction,
  winGameAction,
  loseGameAction,
}