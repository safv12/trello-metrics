import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import BoardSettings from './components/board_settings.js';
import Login from './components/login.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const routes = <Route /*component={App}*/>
  <Route path="/settings" component={BoardSettings} />
  <Route path="/" component={Login} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.querySelector('.container')
);


  // TODO: Users can view their boards
  // TODO: Users can group their boards by category (OPEN, IN PROGRESS, DONE)
  // TODO: Users can save their configurations
  // TODO: Users can configure sprints frequency
