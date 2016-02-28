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
  // TODO: Users can select the board for view metrics
  // TODO: Users can group their lists by category (OPEN, IN PROGRESS, DONE)
  // TODO: Users can configure sprints frequency
  // TODO: Users can see metrics of your boards like Kanban or Scrum
