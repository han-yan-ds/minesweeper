import React from 'react';
import { connect } from 'react-redux';
import {setSearchResultAction} from '../actions/actions';
import {fetchResults} from '../util';
import ReactPaginate from 'react-paginate';

function mapStateToProps (state) {
  const {searchQuery, numPaginatedPages} = state;
  return {searchQuery, numPaginatedPages};
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

function Paginate({searchQuery, numPaginatedPages, changePage}) {
  return (
    <div id="react-paginate">
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={numPaginatedPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(data) => changePage(data, searchQuery)}
        activeClassName={'active'}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginate);
