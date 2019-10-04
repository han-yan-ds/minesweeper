import {connect} from 'react-redux';

function mapStateToProps(state) {
  const {numMines} = state;
  return {
    numMines,
  }
}

function InfoView({numMines}) {
  return (
    <div>
      <span>
        # Mines: {numMines}
      </span>
    </div>
  );
}

export default connect(mapStateToProps, null)(InfoView);