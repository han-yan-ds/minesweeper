function setSearchResultAction(searchResultObj = []) {
  return {
    type: 'SET_SEARCH_RESULTS',
    searchResult: searchResultObj,
  }
}

export {
  setSearchResultAction,
}