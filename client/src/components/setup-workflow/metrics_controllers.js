import React from 'react';

const MetricsControllers = ({ getTimeMetrics }) => {
  return (
      <ul className="col-md-12 list-group column-small">
        <li className="column-title">Actions</li>
        <li className="metrics-column-item">
          <a className="button col-md-12 text-center"
            onClick={() => {
              getTimeMetrics();
            }}>
            Generate all metrics
          </a>
        </li>
      </ul>
  );
}

export default MetricsControllers;
