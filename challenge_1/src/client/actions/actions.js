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

function setNumPaginatedPagesAction(numPages = 1) {
  return {
    type: 'SET_NUM_PAGINATED_PAGES',
    numPages,
  }
}

export {
  setSearchResultAction,
  setSearchQueryAction,
  setNumPaginatedPagesAction,
}