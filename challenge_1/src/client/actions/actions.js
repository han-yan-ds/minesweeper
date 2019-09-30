function setSearchResultAction(searchResultObj = []) {
  return {
    type: 'SET_SEARCH_RESULTS',
    searchResult: searchResultObj,
  }
}

function setSearchQueryAction(query = '') {
  return {
    type: 'SET_SEARCH_QUERY',
    query
  }
}

export {
  setSearchResultAction,
  setSearchQueryAction,
}