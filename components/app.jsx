import {connect} from 'react-redux';
import Board from './Board/Board.jsx';
import Emoji from './Emoji.jsx';
import InfoView from './InfoView.jsx';
import NewGameButton from './NewGameButton.jsx';
import Help from './Help.jsx';

function mapStateToProps(state) {
  const {currentView} = state;
  return {currentView};
}

function App ({currentView}) {
  let [board, help] = (currentView === 'play') ? ['show', 'hide'] : ['hide', 'show'];
  return (
    <div id="container">
      <Emoji/>
      <div className={board}>
        <Board/>
        <InfoView/>
        <NewGameButton/>
      </div>
      <div className={help}>
        <Help/>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(App);