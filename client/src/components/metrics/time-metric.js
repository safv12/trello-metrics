import React from 'react';

const TimeMetric = ({timeMetrics, name, background}) => {

  if (!timeMetrics) {
    return <div></div>;
  }

  return (
    <div className="col-md-4 padding-s">
    <div className="time-metric { background }">
      <h3 className="time-metric-head">{ name }</h3>
      <h2 className="time-metric-value">
        { timeMetrics.time } { timeMetrics.format }
      </h2>
    </div>
    </div>
  );
};

export default TimeMetric;
