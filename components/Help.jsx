function Help () {
  return (
    <div id="help-text">
      <h3>
        HOW TO PLAY MINESWEEPER
      </h3>
      <h4>
        Objective
      </h4>
      <p>
        The goal of this game is to uncover all the "Safe" cells while avoiding all the "Mine" cells.
      </p>
      <p>
        Each cell with a number tells you how many mines there are adjacent to the cell.  There can be a maximum of 8 mines adjacent to a cell.
      </p>
      <h4>
        Flagging
      </h4>
      <p>
        To help with play, you can flag cells that you suspect have mines:
        <ul>
          <li>
            To flag, right-click your mouse.
          </li>
          <li>
            A flag "F" is for cells you think are definitely mines.
          </li>
          <li>
            A flag "?" is for cells you're unsure are mines.
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Help;