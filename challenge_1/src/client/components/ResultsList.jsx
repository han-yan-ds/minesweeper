import React from 'react';
import {connect} from 'react-redux';
import EachSearchResult from './EachSearchResult.jsx';

function mapStateToProps(state) {
  const {searchResult} = state;
  return {
    searchResult,
  }
}

function ResultsList({searchResult}) {
  return (
    <ol>
      <p>Search Results:</p>
      {searchResult.map((entry) => {
        return <EachSearchResult date={entry.date}
          category2={entry.category2}
          description={entry.description} />
      })}
    </ol>
  );
}

export default connect(mapStateToProps, null)(ResultsList);