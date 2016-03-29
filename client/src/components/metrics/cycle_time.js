import React from 'react';

const CycleTime = ({cycletime}) => {
  console.log(cycletime);

  if (!cycletime) {
    return <div></div>;
  }

  return (
    <h1>{ cycletime.cycleTime.time } { cycletime.cycleTime.format }</h1>
  );
};

export default CycleTime;
