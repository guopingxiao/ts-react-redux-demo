import * as React from 'react';
import * as ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'

import Hello from './containers/Hello'

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
