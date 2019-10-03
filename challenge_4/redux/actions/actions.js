// IMPORT code logic that uncovers the rest of the cells around it if empty

import {uncoverBoard} from '../../util/boardUtilities';

function uncoverCellAction(board, row, col) {
  return {
    type: 'UNCOVER_CELL',
    board: uncoverBoard(board, row, col),
  }
}

export {
  uncoverCellAction,
}