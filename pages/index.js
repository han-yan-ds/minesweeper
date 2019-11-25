import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import App from '../components/app.jsx';
import Head from 'next/head';

function Index () {
  return (
    <div>
      <Head>
        <title>Minesweeper</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <link href="/static/styles.css" rel="stylesheet" />
        <meta  property='og:title'
          content='Minesweeper Classic'/>
        <meta 	property='og:image'
          content='https://han-yan-ds.github.io/linkedin-media-thumbnails/images/minesweeper.gif'/>
        <meta 	property='og:description'
          content='Minesweeper Classic'/>
        <meta 	property='og:url'
          content='http://www.minesweeperclassic.com'/>
      </Head>
      <Provider store={configureStore()}>
        <App/>
      </Provider>
    </div>
  )
};

export default Index;