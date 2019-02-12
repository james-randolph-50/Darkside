import {
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';
  import thunk from 'redux-thunk';

import snowboards from './reducers/snowboards';
import snowboardFormData from './reducers/snowboardFormData';

const reducers = combineReducers({
  snowboards,
  snowboardFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);