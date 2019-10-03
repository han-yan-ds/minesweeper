// Cell can have the following prop:
// Value: 
//   Empty (value = 0)
//   Numbered (value = 1 - 8)
//   Mine (value = 9)

// Cell can have the following state:
// isCovered (true or false)
//    if covered, it's clickable too
import {connect} from 'react-redux';
import {uncoverCellAction} from '../../redux/actions/actions';

function mapStateToProps(state) {
  const {boardArr} = state;
  return {
    boardArr,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uncoverCell: (board, row, col) => dispatch(uncoverCellAction(board, row, col)),
  }
}

function Cell ({isCovered, value, rowIndex, colIndex, boardArr, uncoverCell}) {
  let cellValue = (value > 0 && value < 9) ? value : ((value === 0) ? '' : 'X');
  let displayedValue = (isCovered) ? '' : cellValue;
  let isCoveredClass = (isCovered) ? 'covered' : 'exposed';
  return (
    <button 
      className={`${isCoveredClass} val-${cellValue}`}
      onClick={(e) => {
        e.preventDefault();
        uncoverCell(boardArr, rowIndex, colIndex);
      }}
    >
      {/* &nbsp;{displayedValue}&nbsp; */}
      &nbsp;{cellValue}&nbsp;
    </button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);