import {connect} from 'react-redux';

function mapStateToProps(state) {
  const {testKey} = state;
  return {testKey};
}

function App ({testKey}) {
  return (
    <p>{testKey}</p>
  );
}

export default connect(mapStateToProps, null)(App);