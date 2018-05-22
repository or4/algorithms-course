import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Main from './Main';
import './index.css';

import { Provider } from 'react-redux';

import store, { history } from './store';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={Main} />
    </ConnectedRouter>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement != null) {
  ReactDOM.render(<App />, rootElement);
}
