const MINEVALUE = 9; // CANNOT BE numbers 0 - 8

function populateMines (boardArr, numMines) {
  // populate an empty board with mines
  while (numMines > 0) {
    let randX = Math.floor(Math.random() * boardArr[0].length);
    let randY = Math.floor(Math.random() * boardArr.length);
    if (boardArr[randY][randX] === 0) {
      boardArr[randY][randX] = MINEVALUE;
      numMines--;
    }
  }
  return boardArr;
}

function countAdjacent (board, xCoor, yCoor) {
  // counts number of adjacent cells with mines
  function handleOutOfBounds (board, x, y) {
    try {
      return board[x][y];
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
      if (minedBoardArr[rowIndex][colIndex] !== MINEVALUE) {
        minedBoardArr[rowIndex][colIndex] = countAdjacent(minedBoardArr, rowIndex, colIndex);
      }
    })
  })
  return minedBoardArr;
}

export {
  populateMines,
  populateMarkers
}