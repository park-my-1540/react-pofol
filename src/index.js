import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './module';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(ReduxThunk,logger));
ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
 