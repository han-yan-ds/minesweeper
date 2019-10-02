function boardArr (board = [[0]], action) {
  switch (action.type) {
    case 'UNCOVER_CELL':
      return action.board;
    default:
      return board;
  }
}

export {
  boardArr
}