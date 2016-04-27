import React from 'react';

const MetricsControllers = ({ getTimeMetrics, saveMetrics, timeMetrics }) => {
  return (
      <ul className="col-md-12 list-group column-small">
        <li className="column-title">Actions</li>
        <li className="metrics-column-item">
          <a className="button col-md-12 text-center"
            href="#"
            onClick={() => {
              getTimeMetrics();
            }}>
            Get metrics
          </a>
        </li>

        <li className="metrics-column-item">
          <a className="button col-md-12 text-center"
            href="#"
            onClick={() => {
              saveMetrics(timeMetrics.cycleTime);
            }}>
            Save
          </a>
        </li>
      </ul>
  );
}

export default MetricsControllers;
