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

function mapDispatchToProps(dispatch) {
  return {
    uncoverCell: (row, col) => dispatch(uncoverCellAction(row, col)),
  }
}

function Cell ({isCovered, value, rowIndex, colIndex, uncoverCell}) {
  let cellValue = (value > 0 && value < 9) ? value : ((value === 0) ? '' : 'X');
  let displayedValue = (isCovered) ? '' : cellValue;
  let isCoveredClass = (isCovered) ? 'covered' : 'exposed';
  return (
    <button 
      className={`${isCoveredClass} val-${cellValue}`}
      onClick={(e) => {
        e.preventDefault();
        uncoverCell(rowIndex, colIndex);
      }}
    >
      &nbsp;{displayedValue}&nbsp;
    </button>
  )
}

export default connect(null, mapDispatchToProps)(Cell);