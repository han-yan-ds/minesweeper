import React from 'react';
import {connect} from 'react-redux';
import Search from './components/Search.jsx';
import ResultsList from './components/ResultsList.jsx';
import {setSearchResultAction} from './actions/actions';
import {fetchResults} from './util';
import ReactPaginate from 'react-paginate';

function mapStateToProps (state) {
  const {searchQuery} = state;
  return {searchQuery};
}

function mapDispatchToProps (dispatch) {
  return {
    changePage: async (data, searchQuery) => {
      let page = data.selected+1;
      let resjson = await fetchResults(searchQuery, page);
      dispatch(setSearchResultAction(resjson));
    },
  }
}

function App ({searchQuery, changePage}) {
  return (
    <div>
      <Search/>
      <ResultsList/>
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={3}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(data) => changePage(data, searchQuery)}
        activeClassName={'active'}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

