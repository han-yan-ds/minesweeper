import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import App from '../components/app.jsx';

function Index () {
  return (
    <div>
      <Provider store={configureStore()}>
        <App/>
      </Provider>
    </div>
  )
};

export default Index;