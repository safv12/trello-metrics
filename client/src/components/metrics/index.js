import React, { Component } from 'react';
import CycleTime from './cycle_time';

class Metrics extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12">
        <CycleTime cycletime={ this.props.cycletime } />
      </div>
    );
  }
}

export default Metrics;
