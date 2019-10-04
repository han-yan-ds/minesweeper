function boardArr (board = [[0]], action) {
  switch (action.type) {
    case 'UNCOVER_CELL':
      return action.board;
    case 'FLAG_CELL':
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
    default:
      return gameSt;
  }
}

export {
  boardArr,
  gameState,
}