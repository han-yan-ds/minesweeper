import React from 'react';
import {connect} from 'react-redux';
import {setSearchResultAction, setSearchQueryAction} from '../actions/actions';
import {fetchResults} from '../util';

function mapDispatchToProps (dispatch) {
  return {
    setSearchResult: (searchResult) => dispatch(setSearchResultAction(searchResult)),
    setSearchQuery: (query) => dispatch(setSearchQueryAction(query))
  }
}

function Search ({setSearchResult, setSearchQuery}) {
  return (
    <form>
      <input type='text' placeholder='Search for Event' name='searchQuery'/>
      <button onClick={async (e) => {
        e.preventDefault();
        let query = document.getElementsByName('searchQuery')[0].value;
        let resjson = await fetchResults(query);
        setSearchResult(resjson);
        setSearchQuery(query);
      }}>SEARCH</button>
    </form>
  );
}

export default connect(null, mapDispatchToProps)(Search);