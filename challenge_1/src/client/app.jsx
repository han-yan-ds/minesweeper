import React from 'react';
import Search from './components/Search.jsx';
import ResultsList from './components/ResultsList.jsx';
import Paginate from './components/Paginate.jsx';
import './styles/app.css';

function App () {
  return (
    <div>
      <Search/>
      <ResultsList/>
      <Paginate/>
    </div>
  );
}

export default App;

