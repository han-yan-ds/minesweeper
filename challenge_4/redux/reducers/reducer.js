function boardArr (board = [[0]], action) {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return action.board;
    default:
      return board;
  }
}

export {
  boardArr
}