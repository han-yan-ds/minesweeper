import {populateMines, populateMarkers} from './boardUtilities';

function boardInitializer (width, height, numMines) {
  // limit num mines to 15% of total board size
  numMines = Math.min(numMines, width * height);
  // create array of arrays to represent board
  let board = [];
  for (let row = 0; row < height; row++) {
    board.push(new Array(width).fill(0))
  }
  populateMines(board, numMines);
  populateMarkers(board);
  console.log(board);
  return board;
}



export default boardInitializer;