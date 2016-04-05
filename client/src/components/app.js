import React, { Component } from 'react';
import SetupWorkflow from './setup-workflow';
import Metrics from './metrics';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeMetrics: null
    }
  }

  render() {
    return (
      <div>
        <SetupWorkflow
          onTimeMetrics={ timeMetrics => this.setState({ timeMetrics }) } />
        <Metrics timeMetrics={ this.state.timeMetrics } />
      </div>
    );
  }
}



// TODO: Configure trello key and token into env vars and move trello api calls
//       to ./server
// TODO: Reuse time metric component - actually call ./metric/cycletime
// TODO: Refactor css, and components
