import React from 'react';
import {connect} from 'react-redux';
import {setSearchResultAction} from '../actions/setSearchResult';

const url = `http://www.localhost:4000`;

async function fetchSearch (query) {
  let response = await fetch(`${url}/events?q=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return await response.json();
}

function mapDispatchToProps (dispatch) {
  return {
    setSearchResult: (searchResult) => dispatch(setSearchResultAction(searchResult)),
  }
}

function Search ({setSearchResult}) {
  return (
    <form>
      <input type='text' placeholder='Search for Event' name='searchQuery'/>
      <button onClick={async (e) => {
        e.preventDefault();
        let resjson = await fetchSearch(document.getElementsByName('searchQuery')[0].value);
        setSearchResult(resjson);
      }}>SEARCH</button>
    </form>
  );
}

export default connect(null, mapDispatchToProps)(Search);