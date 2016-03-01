import React, { Component } from 'react';

const ListConfiguration = ({lists}) => {
  if (!lists) {
    return <div className="col-md-8 boards-list">Select one board...</div>
  }

  return (
    <div>{lists}</div>
  );
};

export default ListConfiguration;
