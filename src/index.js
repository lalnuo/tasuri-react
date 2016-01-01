import React from 'react';
import { render } from 'react-dom';
import  App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers/app_reducer'

const store = createStore(reducer)
render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
