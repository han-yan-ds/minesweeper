import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './client/store';
import App from './client/app.jsx';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);