function searchResult (searchResultObj = [], action) {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return action.searchResult;
    default:
      return searchResultObj;
  }
}

function searchQuery (query = '', action) {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return action.query;
    default:
      return query;
  }
}

export {
  searchResult,
  searchQuery,
}