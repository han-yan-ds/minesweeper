const MINEVALUE = 9; // CANNOT BE numbers 0 - 8

function cloneBoard(board) {
  let newBoard = new Array(board.length);
  for (let row = 0; row < board.length; row++) {
    newBoard[row] = new Array(board[0].length);
    for (let col = 0; col < board[0].length; col++) {
      newBoard[row][col] = {
        isCovered: board[row][col].isCovered,
        value: board[row][col].value,
        isFlagged: board[row][col].isFlagged,
      }
    }
  }
  return newBoard;
}

function populateMines (board, numMines) {
  // populate an empty board with mines
  while (numMines > 0) {
    let randX = Math.floor(Math.random() * board[0].length);
    let randY = Math.floor(Math.random() * board.length);
    if (board[randY][randX].value === 0) {
      board[randY][randX].value = MINEVALUE;
      numMines--;
    }
  }
  return board;
}

function countAdjacentMines (board, xCoor, yCoor) {
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

function populateMarkers (minedBoard) {
  // populates unmined cells that are adjacent to mine(s) with number of adjacent mines
  minedBoard.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (minedBoard[rowIndex][colIndex].value !== MINEVALUE) {
        minedBoard[rowIndex][colIndex].value = countAdjacentMines(minedBoard, rowIndex, colIndex);
      }
    })
  })
  return minedBoard;
}

function countRemainingSafe (playedBoard) {
  let counter = 0;
  playedBoard.forEach((row) => {
    row.forEach((cell) => {
      if (cell.isCovered && cell.value !== MINEVALUE) {
        counter++;
      }
    })
  });
  return counter;
}

function uncoverBoard (board, row, col, winCb, loseCb, updateRemainingCb, recursiveMode = false) {
  // given a board, row#, and, col#, uncovers the rest of the board
  // to uncover: set board[x][y].isCovered = false
  function uncoverCell(r, c) {
    board[r][c].isCovered = false;
  }
  // 0) if the selected cell is already uncovered, RETURN NULL
  if (!board[row][col].isCovered) {
    return board;
  } else {
    // otherwise, clone board
    if (!recursiveMode) {
      board = cloneBoard(board);
    }
    // 1) if the selected cell is from 1-8... uncover just this cell
    if (board[row][col].value >= 1 && board[row][col].value <= 8) {
      uncoverCell(row, col);
    }
    // 2) if the selected cell is a 9 (mine)... uncover all mines and lose the game
    else if (board[row][col].value === MINEVALUE) {
      board.forEach((eachRow, rIndex) => {
        eachRow.forEach((eachCell, cIndex) => {
          if (eachCell.value === MINEVALUE) {
            uncoverCell(rIndex, cIndex);
          }
        })
      })
      loseCb();
    }
    // 3) if the selected cell is a 0 (empty)...
    else {
      function uncoverNeighbor (r, c) {
        try {
          uncoverBoard(board, r, c, winCb, loseCb, updateRemainingCb, true); // run uncoverBoard recursively
        } catch (err) {}
      }
      // a) uncover this cell
      uncoverCell(row, col);
      // c) run uncoverBoard (recursively) for all cell coors adjacent (if it runs into a number 1-8, it just uncovers that one)
        // recursion base case is built-in rule 1)
      uncoverNeighbor(row-1, col+1);
      uncoverNeighbor(row-1, col);
      uncoverNeighbor(row-1, col-1);
      uncoverNeighbor(row, col+1);
      uncoverNeighbor(row, col-1);
      uncoverNeighbor(row+1, col+1);
      uncoverNeighbor(row+1, col);
      uncoverNeighbor(row+1, col-1);
    }
    // finally, check if the game is won:
    if (!recursiveMode) {
      let remainingSafe = countRemainingSafe(board);
      updateRemainingCb(remainingSafe);
      if (remainingSafe === 0) {
        winCb();
      }
    }
    return board;
  }
}

function toggleFlag(cell) {
  // 0: no flag
  // 1: is flagged
  // 0.5: half flagged (caution instead of THIS IS A MINE)
  switch (cell.isFlagged) {
    case 0.5:
      cell.isFlagged = 0;
      break;
    case 1:
      cell.isFlagged = 0.5;
      break;
    default: // 0
      cell.isFlagged = 1;
      break;
  }
}

function flagCell (board, row, col) {
  board = cloneBoard(board);
  toggleFlag(board[row][col]);
  return board;
}

export {
  populateMines,
  populateMarkers,
  uncoverBoard,
  flagCell,
}