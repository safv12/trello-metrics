import React, { Component } from 'react';
import TimeMetric from './time-metric';
import CumulativeFlow  from './cumulative-flow';

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
          styles='time-metric blue-bg' />
        <TimeMetric
          timeMetrics={ this.props.timeMetrics.leadTime }
          name='Lead time'
          styles='time-metric gray-bg' />
        <TimeMetric
          timeMetrics={ this.props.timeMetrics.reactionTime }
          name='Reaction time'
          styles='time-metric red-bg' />

        <CumulativeFlow series={ this.props.timeMetrics.cumulativeFlow }
          container='cumulativeflow' />
      </div>
    );
  }
}

export default Metrics;
