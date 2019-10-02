// IMPORT code logic that uncovers the rest of the cells around it if empty

function uncoverCellAction(board, row, col) {
  return {
    type: 'UNCOVER_CELL',
    board,
  }
}

export {
  uncoverCellAction,
}