function searchResult (searchResultObj = [], action) {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return action.searchResult;
    default:
      return searchResultObj;
  }
}

export {
  searchResult,
}