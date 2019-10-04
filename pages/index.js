import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import App from '../components/app.jsx';
import Head from 'next/head';

function Index () {
  return (
    <div>
      <Head>
        <title>Minesweeper</title>
        <script src="https://kit.fontawesome.com/661f7c70a6.js" ></script>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <Provider store={configureStore()}>
        <App/>
      </Provider>
    </div>
  )
};

export default Index;