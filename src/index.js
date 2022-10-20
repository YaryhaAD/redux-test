import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import MainComponent from './components/MainComponent'
import { rootReducer } from './store/reducers';

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME'
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME'

const store = createStore(rootReducer)
// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  </React.StrictMode>
);

