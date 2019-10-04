import {Component} from 'react';
import {connect} from 'react-redux';
import {switchViewAction} from '../redux/actions/actions';

function mapStateToProps(state) {
  const {gameState, currentView} = state;
  return {gameState, currentView}
}

function mapDispatchToProps(dispatch) {
  return {
    switchView: (currentView) => dispatch(switchViewAction(currentView)),
  }
}

class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojiDidMount: false,
    }
  }

  componentDidMount() {
    this.setState({
      emojiDidMount: true,
    })
  }

  render() {
    if (this.state.emojiDidMount) {
      let icon, iconId;
      let context = this;
      switch (this.props.gameState) {
        case 1:
          icon = 'sentiment_very_satisfied';
          iconId = 'win-face';
          break;
        case -1:
          icon = 'mood_bad';
          iconId = 'lose-face';
          break;
        default:
          icon = 'sentiment_satisfied';
          iconId = '';
      }
      return <div id="emoji">
        <button id="emoji-button"
          onClick={(e) => {
            e.preventDefault();
            context.props.switchView(context.props.currentView);
          }}
        >
          <i className="material-icons" id={iconId}>
            {icon}
          </i>
        </button>
      </div>
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emoji);