const MINEVALUE = 9; // CANNOT BE numbers 0 - 8

function populateMines (boardArr, numMines) {
  // populate an empty board with mines
  while (numMines > 0) {
    let randX = Math.floor(Math.random() * boardArr[0].length);
    let randY = Math.floor(Math.random() * boardArr.length);
    if (boardArr[randY][randX].value === 0) {
      boardArr[randY][randX].value = MINEVALUE;
      numMines--;
    }
  }
  return boardArr;
}

function countAdjacent (board, xCoor, yCoor) {
  // counts number of adjacent cells with mines
  function handleOutOfBounds (board, x, y) {
    try {
      return board[x][y].value;
    } catch(err) {
      return 0;
    }
  }
  let adjacentCells = [
    handleOutOfBounds(board, xCoor-1, yCoor-1),
    handleOutOfBounds(board, xCoor-1, yCoor),
    handleOutOfBounds(board, xCoor-1, yCoor+1),
    handleOutOfBounds(board, xCoor, yCoor-1),
    handleOutOfBounds(board, xCoor, yCoor+1),
    handleOutOfBounds(board, xCoor+1, yCoor-1),
    handleOutOfBounds(board, xCoor+1, yCoor),
    handleOutOfBounds(board, xCoor+1, yCoor+1)
  ];
  return adjacentCells.filter((item) => (item === MINEVALUE)).length;
}

function populateMarkers (minedBoardArr) {
  // populates unmined cells that are adjacent to mine(s) with number of adjacent mines
  minedBoardArr.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (minedBoardArr[rowIndex][colIndex].value !== MINEVALUE) {
        minedBoardArr[rowIndex][colIndex].value = countAdjacent(minedBoardArr, rowIndex, colIndex);
      }
    })
  })
  return minedBoardArr;
}

function uncoverBoard (board, row, col) {
  // given a board, row#, and, col#, uncovers the rest of the board
  // to uncover: set board[x][y].isCovered = false

  // 0) if the selected cell is already uncovered, RETURN NULL (undefined??)
  // otherwise, create new board (COPY BOARD... set to newBoard) <--- not sure if this is required
  // 1) if the selected cell is from 1-8... uncover just this cell
  // 2) if the selected cell is a 9 (mine)... uncover all mines and lose the game
  // 3) if the selected cell is a 0 (empty)...
    // a) uncover this cell
    // b) make an Array of all cell coordinates around it NOT YET UNCOVERED
    // c) run uncoverBoard (recursively) for all cell coors in that ^^ Array
      // recursion base case is built-in rule 1)
  function uncoverCell(r, c) {
    board[r][c].isCovered = false;
  }
}

export {
  populateMines,
  populateMarkers
}