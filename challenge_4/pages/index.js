import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import App from '../components/app.jsx';
import Head from 'next/head';

function Index () {
  return (
    <div>
      <Head>
        <title>My styled page</title>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <Provider store={configureStore()}>
        <App/>
      </Provider>
    </div>
  )
};

export default Index;