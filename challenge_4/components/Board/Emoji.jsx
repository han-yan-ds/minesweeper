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
      let iconClass;
      switch (this.props.gameState) {
        case 1:
          iconClass = 'far fa-grin-stars';
        case -1:
          iconClass = 'far fa-dizzy';
        default:
          iconClass = 'far fa-smile';
      }
      return <div id="emoji">
        <p>{iconClass}</p>
        <i className={iconClass}></i>
      </div>
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps, null)(Emoji);