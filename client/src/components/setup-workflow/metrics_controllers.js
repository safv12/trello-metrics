import React from 'react';

const MetricsControllers = ({ getTimeMetrics }) => {
  return (
      <ul className="col-md-1 list-group column-small">
        <li className="column-title">Metrics</li>
        <li className="metrics-column-item">
          <a className="button"
            onClick={() => {
              getTimeMetrics();
            }}>
            Generate
          </a>
        </li>
      </ul>
  );
}

export default MetricsControllers;
