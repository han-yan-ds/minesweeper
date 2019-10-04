// Cell can have the following prop:
// Value:
//   Empty (value = 0)
//   Numbered (value = 1 - 8)
//   Mine (value = 9)

// Cell can have the following state:
// isCovered (true or false)
//    if covered, it's clickable too
import {connect} from 'react-redux';
import {uncoverCellAction, flagCellAction,
  winGameAction, loseGameAction} from '../../redux/actions/actions';

function mapStateToProps(state) {
  const {boardArr, gameState} = state;
  return {
    boardArr,
    gameState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uncoverCell: (board, row, col, winCb, loseCb) => {
      dispatch(uncoverCellAction(board, row, col, winCb, loseCb))
    },
    flagCell: (board, row, col) => dispatch(flagCellAction(board, row, col)),
    winGame: () => dispatch(winGameAction()),
    loseGame: () => dispatch(loseGameAction()),
  }
}

function Cell ({isCovered, value, isFlagged, rowIndex, colIndex,
  boardArr, gameState,
  uncoverCell, flagCell, winGame, loseGame}) {
  let cellValue = (value > 0 && value < 9) ? value : ((value === 0) ? '' : 'X');
  let displayedValue = (!isCovered) ? cellValue : ((isFlagged) ? 'F' : '');
  let isCoveredClass = (isCovered) ? 'covered' : (value === 9) ? 'exposed-mine' : 'exposed-safe';
  let disabledClass = (gameState === 0 && !isFlagged) ? '' : 'disabled-button';
  let flaggedClass = (isFlagged && isCovered) ? 'flagged' : '';
  // let disabledClass = (gameState === 0) ? '' : 'disabled-button';
  return (
    <button
      className={`${isCoveredClass} val-${cellValue} ${disabledClass} ${flaggedClass}`}
      onMouseDown={(e) => {
        e.preventDefault();
        if (e.button === 0) { // left click
          uncoverCell(boardArr, rowIndex, colIndex, winGame, loseGame);
        } else { // right click
          flagCell(boardArr, rowIndex, colIndex);
        }
      }}
    >
      &nbsp;{displayedValue}&nbsp;
      {/* &nbsp;{cellValue}&nbsp; */}
    </button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);