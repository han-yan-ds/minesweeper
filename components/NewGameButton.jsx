import {connect} from 'react-redux';
import boardInitializer from '../util/boardInitializer';
import {newGameAction} from '../redux/actions/actions';

function mapDispatchToProps (dispatch) {
  return {
    newGame: (width, height, numMines) => dispatch(newGameAction(width, height, numMines)),
  }
}

function NewGameButton ({newGame}) {
  let width = 15;
  let height = 15;
  let numMines = 35;
  return (
    <button onClick={() => newGame(width, height, numMines)}>NEW GAME</button>
  );
}

export default connect(null, mapDispatchToProps)(NewGameButton);