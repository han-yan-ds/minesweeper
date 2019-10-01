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
      <p>SEARCH RESULTS:</p>
      {searchResult.map((entry, index) => {
        return <EachSearchResult key={`${index}-date-${entry.date}`}
          date={entry.date}
          category2={entry.category2}
          description={entry.description} />
      })}
    </ol>
  );
}

export default connect(mapStateToProps, null)(ResultsList);