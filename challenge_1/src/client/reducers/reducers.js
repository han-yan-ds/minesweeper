function searchResult (searchResultObj = [], action) {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return action.searchResult;
    default:
      return searchResultObj;
  }
}

// function pageIndex (null, action) {
//   switch (action.type) {
//     case 'GO_TO_NEXT_PAGE':
//       return ...........;
//     case 'GO_TO_PREV_PAGE':
//       return ...........; 
//   }
// }

export {
  searchResult,
}