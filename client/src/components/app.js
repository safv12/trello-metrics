import React, { Component } from 'react';
import SetupWorkflow from './setup-workflow';
import Metrics from './metrics';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cycletime: null
    }
  }

  render() {
    return (
      <div>
        <SetupWorkflow
          onCycleTime={ cycletime => this.setState({ cycletime }) } />
        <Metrics cycletime={ this.state.cycletime } />
      </div>
    );
  }
}



// TODO: Configure trello key and token into env vars and move trello api calls
//       to ./server
// TODO: Reuse time metric component - actually call ./metric/cycletime
// TODO: Refactor css, and components
