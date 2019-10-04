import {connect} from 'react-redux';

function mapStateToProps(state) {
  const {numMines, remainingSafe} = state;
  return {
    numMines,
    remainingSafe,
  }
}

function InfoView({numMines, remainingSafe}) {
  return (
    <div id="info-box">
      <div id="mine-counter">
        # Mines:&nbsp;&nbsp;<span>{numMines}</span>
      </div>
      <div id="remaining-safe-counter">
        Safe Cells Left:&nbsp;&nbsp;<span>{remainingSafe}</span>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(InfoView);