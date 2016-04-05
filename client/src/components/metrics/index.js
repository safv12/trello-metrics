import React, { Component } from 'react';
import TimeMetric from './time-metric';

class Metrics extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.timeMetrics) {
      return <div></div>;
    }

    return (
      <div className="col-md-12">
        <TimeMetric
          timeMetrics={ this.props.timeMetrics.cycleTime }
          name='Cycle time'
          background='blue-bg' />
        <TimeMetric
          timeMetrics={ this.props.timeMetrics.leadTime }
          name='Lead time'
          background='gray-bg' />
        <TimeMetric
          timeMetrics={ this.props.timeMetrics.reactionTime }
          name='Reaction time'
          background='red-bg' />
      </div>
    );
  }
}

export default Metrics;
