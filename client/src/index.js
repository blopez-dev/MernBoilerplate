import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import Application from './application';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
