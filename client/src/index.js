import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const routes = <Route>
  <Route path="/" component={App} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.querySelector('#container')
);
