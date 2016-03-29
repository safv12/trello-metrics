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
        <CycleTime cycletime={ this.state.cycletime } />
      </div>
    );
  }
}
