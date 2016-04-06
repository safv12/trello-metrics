import React from 'react';

const TimeMetric = ({timeMetrics, name, styles}) => {

  if (!timeMetrics) {
    return <div></div>;
  }

  return (
    <div className="col-md-4 padding-s">
      <div className={ styles }>
        <h3 className="time-metric-head">{ name }</h3>
        <h2 className="time-metric-value">
          { timeMetrics.time || 0 } { timeMetrics.format }
        </h2>
      </div>
    </div>
  );
};

export default TimeMetric;
