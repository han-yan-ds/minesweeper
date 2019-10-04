import {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  const {gameState} = state;
  return {gameState}
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
        <i className="material-icons" id={iconId}>
          {icon}
        </i>
      </div>
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps, null)(Emoji);