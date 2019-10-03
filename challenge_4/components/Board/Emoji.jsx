import {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  const {gameState} = state;
  return {gameState}
}

function Emoji({gameState}) {
  let iconClass;
  switch (gameState) {
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
}

export default connect(mapStateToProps, null)(Emoji);