import {populateMines, populateMarkers} from './boardUtilities';

function boardInitializer (width, height, numMines) {
  // limit num mines to 15% of total board size
  numMines = Math.min(numMines, width * height);
  // create array of arrays to represent board
  let board = new Array(height);
  for (let row = 0; row < height; row++) {
    board[row] = new Array(width);
    for (let col = 0; col < width; col++) {
      board[row][col] = {
        isCovered: true,
        value: 0
      }
    }
  }
  populateMines(board, numMines);
  populateMarkers(board);
  return board;
}

export default boardInitializer;