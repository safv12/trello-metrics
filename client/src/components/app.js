import React, { Component } from 'react';
import SetupWorkflow from './setup-workflow';
import CycleTime from './metrics/cycle_time';

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

        <div className="col-md-12">
          <CycleTime cycletime={ this.state.cycletime } />
        </div>
      </div>
    );
  }
}


// TODO: Move metrics to ./metrics
// TODO: Configure trello key and token into env vars and move trello api calls
//       to ./server
// TODO: Reuse time metric component - actually call ./metric/cycletime
// TODO: Refactor css, and components
