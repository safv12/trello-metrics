import React, { Component } from 'react';
import TimeMetric from './time-metric';
import CumulativeFlow  from './cumulative-flow';

class Metrics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cycletimes: null
    }

    this.CycleTimes();
  }

  CycleTimes() {
    var _this = this;

    $.ajax({
      type: 'GET',
      dataType:'json',
      url: 'http://localhost:9001/v1/metrics/cycletime',
      success: function(res) {
        if (res.length){
          _this.setState({
            cycletimes: res
          });
        }
      }
    });
  }

  getCycletimesSeries(cycletimes) {
    var series = [{
      name: 'Cycle times',
      data: []
    }];

    cycletimes.forEach(function(cycletime) {
      series[0].data.push(cycletime.time);
    });

    return series;
  }

  render() {

    if (!this.props.timeMetrics) {
      return <div></div>;
    }

    var cycletimeSeries;
    if (this.state.cycletimes) {
      cycletimeSeries = this.getCycletimesSeries(this.state.cycletimes);
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
          container='cumulativeflow'
          chartType='column'
          chartTitle='Cumulative flow' />

        <CumulativeFlow series={ cycletimeSeries }
          container='cycletimeSeries'
          chartType='spline'
          chartTitle='Historical cycletime' />
      </div>
    );
  }
}

export default Metrics;
