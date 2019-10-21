import {connect} from 'react-redux';

function mapStateToProps(state) {
  const {numMines, numFlagged, remainingSafe} = state;
  return {
    numMines,
    numFlagged,
    remainingSafe,
  }
}

function InfoView({numMines, numFlagged, remainingSafe}) {
  return (
    <React.Fragment>
      <br/>
      <div id="mine-counter" className="info">
        # Mines:&nbsp;&nbsp;<span>{numMines}</span>
      </div>
      <div id="info-box">
        <div id="remaining-mine-counter" className="info">
          Mines To Flag:&nbsp;&nbsp;<span>{numMines - numFlagged}</span>
        </div>
        <div id="remaining-safe-counter" className="info">
          Safe Cells Left:&nbsp;&nbsp;<span>{remainingSafe}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, null)(InfoView);