import React, { Component } from 'react';
import Highcharts from 'highcharts';

class CumulativeFlow extends Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    if (this.props.modules) {
      this.props.modules.forEach(function(module) {
        module(Highcharts);
      });
    }

    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.props.container,
      this.props.options
    );
  }


  componentWillUnmount() {
    this.chart.destroy();
  }


  render() {
    return <div id={ this.props.container }></div>;
  }
}

export default CumulativeFlow;
