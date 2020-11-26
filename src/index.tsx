import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux setup
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// Thunk enable async
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './logic/reducers';
import { IWindow } from './types';
import reportWebVitals from './reportWebVitals';

const composeEnhancers = (window as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
