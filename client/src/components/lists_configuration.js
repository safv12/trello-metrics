import React, { Component } from 'react';

const ListConfiguration = ({board}) => {
  if (!board) {
    return <div className="col-md-8 boards-list">Select one board...</div>
  }

  return (
    <div>{board.id}</div>
  );
};

export default ListConfiguration;
