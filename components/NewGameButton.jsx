import {Component} from 'react';
import {connect} from 'react-redux';
import boardInitializer from '../util/boardInitializer';
import difficulties from '../util/difficulties';
import {newGameAction} from '../redux/actions/actions';

function mapDispatchToProps (dispatch) {
  return {
    newGame: (width, height, numMines) => dispatch(newGameAction(width, height, numMines)),
  }
}

class NewGameButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 0,
    }
  }

  render() {
    let context = this;
    return (
      <form>
        <select onChange={(e) => this.setState({difficulty: e.target.value})}>
          <option value={0}>Novice</option>
          <option value={1}>Intermediate</option>
          <option value={2}>Expert</option>
          <option value={3}>Nightmare</option>
        </select>
        <br/><br/>
        <button onClick={(e) => {
          e.preventDefault();
          context.props.newGame(
            difficulties[context.state.difficulty].width,
            difficulties[context.state.difficulty].height,
            difficulties[context.state.difficulty].numMines,
          );}}>NEW GAME</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(NewGameButton);