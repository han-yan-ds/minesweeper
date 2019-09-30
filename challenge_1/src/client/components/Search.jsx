import React from 'react';
import {connect} from 'react-redux';
import {
  setSearchResultAction, 
  setSearchQueryAction, 
  setNumPaginatedPagesAction
} from '../actions/actions';
import {fetchAllResults, pageLimit} from '../util';

function mapDispatchToProps (dispatch) {
  return {
    setSearchResult: (searchResult) => dispatch(setSearchResultAction(searchResult)),
    setSearchQuery: (query) => dispatch(setSearchQueryAction(query)),
    setNumPaginatedPages: (numPages) => dispatch(setNumPaginatedPagesAction(numPages)),
  }
}

function Search ({setSearchResult, setSearchQuery, setNumPaginatedPages}) {
  return (
    <form>
      <input type='text' placeholder='Search for Event' name='searchQuery'/>
      <button onClick={async (e) => {
        e.preventDefault();
        let query = document.getElementsByName('searchQuery')[0].value;
        let resjson = await fetchAllResults(query);
        let numPages = Math.ceil(resjson.length/pageLimit);
        let limitedResults = resjson.slice(0, pageLimit)
        setSearchResult(limitedResults);
        setSearchQuery(query);
        setNumPaginatedPages(numPages);
      }}>SEARCH</button>
    </form>
  );
}

export default connect(null, mapDispatchToProps)(Search);