function setSearchResultAction(searchResultObj = []) {
  return {
    type: 'SET_SEARCH_RESULTS',
    searchResult: searchResultObj,
  }
}

// function goNextPage() {
//   return {
//     type: 'GO_TO_NEXT_PAGE',
//   }
// }

// function goPrevPage() {
//   return {
//     type: 'GO_TO_PREV_PAGE',
//   }
// }

export {
  setSearchResultAction,
  // goNextPage,
  // goPrevPage,
}