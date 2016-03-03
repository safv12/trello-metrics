import React, { Component } from 'react';

const ListConfiguration = ({lists}) => {
  if (!lists.length) {
    return <div className="col-md-8 boards-list">Select one board...</div>
  }

  return (
    <div>list</div>
  );
};

export default ListConfiguration;
