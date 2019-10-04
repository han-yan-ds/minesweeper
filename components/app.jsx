import Board from './Board/Board.jsx';
import Emoji from './Emoji.jsx';
import InfoView from './InfoView.jsx';
import NewGameButton from './NewGameButton.jsx';

function App () {
  return (
    <div id="container">
      <Emoji/>
      <Board/>
      <InfoView/>
      <NewGameButton/>
    </div>
  );
}

export default App;