// Cell can have the following prop:
// Value: 
//   Empty (value = 0)
//   Numbered (value = 1 - 8)
//   Mine (value = 9)

// Cell can have the following state:
// isCovered (true or false)
//    if covered, it's clickable too
import {connect} from 'react-redux';
import {uncoverCellAction, winGameAction, loseGameAction} from '../../redux/actions/actions';

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
    winGame: () => dispatch(winGameAction()),
    loseGame: () => dispatch(loseGameAction()),
  }
}

function Cell ({isCovered, value, rowIndex, colIndex, 
  boardArr, gameState, 
  uncoverCell, winGame, loseGame}) {
  let cellValue = (value > 0 && value < 9) ? value : ((value === 0) ? '' : 'X');
  let displayedValue = (isCovered) ? '' : cellValue;
  let isCoveredClass = (isCovered) ? 'covered' : (value === 9) ? 'exposed-mine' : 'exposed-safe';
  let disabledClass = (gameState === 0) ? '' : 'disabled-button';
  return (
    <button 
      className={`${isCoveredClass} val-${cellValue} ${disabledClass}`}
      onClick={(e) => {
        e.preventDefault();
        uncoverCell(boardArr, rowIndex, colIndex, winGame, loseGame);
      }}
    >
      &nbsp;{displayedValue}&nbsp;
      {/* &nbsp;{cellValue}&nbsp; */}
    </button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);