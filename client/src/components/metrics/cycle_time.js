import React from 'react';

const CycleTime = ({cycletime}) => {

  if (!cycletime) {
    return <div></div>;
  }

  return (
    <div className="col-md-3 time-metric">
      <h3 className="time-metric-head">Cycletime</h3>
      <h2 className="time-metric-value">{ cycletime.cycleTime.time } { cycletime.cycleTime.format }</h2>
    </div>
  );
};

export default CycleTime;
