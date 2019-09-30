import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const initialData = {
  searchResult: [],
  pageIndex: 0,
}

export default function configureStore() {
  return createStore(
    rootReducer,
    initialData,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}