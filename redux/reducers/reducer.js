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

function numMines (num = 15, action) {
  switch (action.type) {
    case 'NEW_GAME':
      return action.numMines;
    default:
      return num;
  }
}

export {
  boardArr,
  gameState,
  numMines,
}