import React from 'react';
import {connect} from 'react-redux';
import {setSearchResultAction} from '../actions/actions';
import {fetchResults} from '../util';

const url = `http://www.localhost:4000`;

function mapStateToProps (state) {
  const {page} = state;
  return {
    page,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setSearchResult: (searchResult) => dispatch(setSearchResultAction(searchResult)),
  }
}

function Search ({setSearchResult, page}) {
  return (
    <form>
      <input type='text' placeholder='Search for Event' name='searchQuery'/>
      <button onClick={async (e) => {
        e.preventDefault();
        let resjson = await fetchResults(url, 
          document.getElementsByName('searchQuery')[0].value,
          page,
          );
        setSearchResult(resjson);
      }}>SEARCH</button>
    </form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);