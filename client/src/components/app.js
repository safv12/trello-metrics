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

  saveMetrics(param) {
    $.ajax({
      type: 'POST',
      data: JSON.stringify(param),
      contentType: 'application/json',
      dataType:'json',
      url: 'http://localhost:9001/v1/metrics/cycletime',
      success: function(res) {
        if (res._id){
          alert('It has been successfully saved');
        }
      }
    });
  }

  render() {
    return (
      <div>
        <SetupWorkflow
          onTimeMetrics={ timeMetrics => this.setState({ timeMetrics }) }
          timeMetrics={ this.state.timeMetrics }
          saveMetrics={ param => this.saveMetrics } />
        <Metrics timeMetrics={ this.state.timeMetrics } />
      </div>
    );
  }
}



// TODO: Configure trello key and token into env vars and move trello api calls
//       to ./server
// TODO: Reuse time metric component - actually call ./metric/cycletime
// TODO: Refactor css, and components
