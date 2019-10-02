// Cell can have the following prop:
// Value: 
//   Empty (value = 0)
//   Numbered (value = 1 - 8)
//   Mine (value = 9)

// Cell can have the following state:
// isCovered (true or false)
//    if covered, it's clickable too

function Cell ({isCovered, value}) {
  let displayedValue = (value > 0 && value < 9) ? value : ((value === 0) ? '' : 'X');
  let isCoveredClass = (isCovered) ? 'covered' : 'exposed';
  return (
    <button 
      className={`${isCoveredClass} val-${displayedValue}`}
    >
      &nbsp;{displayedValue}&nbsp;
    </button>
  )
}

export default Cell;