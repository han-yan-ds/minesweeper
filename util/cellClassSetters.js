const MINEDISPLAY = 'X';
const FLAGDISPLAY = 'F';

function helperSetCellValue (value) {
  if (value > 0 && value < 9) { // if adjacent to a mine, show the number
    return value;
  } else if (value === 0) { // if not a mine or adjacent to a mine, show empty (space)
    return '';
  } else { // if IS a mine, show an X
    return MINEDISPLAY;
  }
}

function helperDisplayedValue (isCovered, isFlagged, cellValue, gameState) {
  if (!isCovered) { // if cell is exposed, show cell Value
    return cellValue;
  } else if (isFlagged) { // if cell is covered but Flagged, show F
    return FLAGDISPLAY;
  } else if (gameState === 1 && isCovered) { // if game is won, show F for covered cells (mines)
    return FLAGDISPLAY;
  } else { // if cell is covered and not Flagged, show empty
    return '';
  }
}

function helperCoveredClass (isCovered, cellValue) {
  if (isCovered) { // if covered, className "covered"
    return 'covered';
  } else if (cellValue === MINEDISPLAY) { // if exposed & a mine, className "exposed-mine"
    return 'exposed-mine';
  } else { // if exposed & not a mine, className "exposed-safe"
    return 'exposed-safe';
  }
}

function helperDisabledClass (gameState) {
  if (gameState === 0) { // if game is still going, don't disable buttons
    return '';
  } else { // if game is won or lost, disable buttons
    return 'disabled-button';
  }
}

function helperFlaggedClass (isFlagged, isCovered) {
  if (isFlagged && isCovered) { // if cell is flagged (and still covered), style for FLAGGED
    return 'flagged';
  } else { // otherwise: don't style for flagged at all
    return '';
  }
}

export {
  helperSetCellValue,
  helperDisplayedValue,
  helperCoveredClass,
  helperDisabledClass,
  helperFlaggedClass,
}