// Cell can have the following prop:
// Value: 
//   Empty (value = 0)
//   Numbered (value = 1 - 8)
//   Mine (value = 9)

// Cell can have the following state:
// isCovered (true or false)
//    if covered, it's clickable too

function Cell ({}) {
  return (
    <button>
      0
    </button>
  )
}

export default Cell;