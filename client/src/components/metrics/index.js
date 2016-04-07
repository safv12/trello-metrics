import React, { Component } from 'react';
import TimeMetric from './time-metric';
import CumulativeFlow  from './cumulative-flow';

class Metrics extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const cumulativeFlowOptions = {
      chart: { type: 'column' },
      title: { text: 'CumulativeFlow' },
      xAxis: { categories: ['Current Sprint'] },
      yAxis: { title: { text: 'Trello lists' } },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Time: {point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        }
      },
      series: [
        { name: 'Open', data: [5]},
        { name: 'Inprogress', data: [2]},
        { name: 'Done', data: [3] }
      ]
    };

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

        <CumulativeFlow options={ cumulativeFlowOptions }
          container='cumulativeflow' />
      </div>
    );
  }
}

export default Metrics;
