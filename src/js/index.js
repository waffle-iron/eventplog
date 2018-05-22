import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
// import '../scss/main.scss';
import './index.css'
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from '../registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    overflow-x: hidden;
	  font-family: 'proxima-nova', sans-serif;
  }
  
`;


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();