import React from 'react';
import { render } from 'react-dom';
import  App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/app_reducer'
import { fetchUsers } from './actions/actions'
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch(fetchUsers());

render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
