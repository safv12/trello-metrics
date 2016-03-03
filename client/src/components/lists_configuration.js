import React, { Component } from 'react';
import IgnoreLists from './ignore_lists';

const ListConfiguration = ({lists}) => {
  if (!lists.length) {
    return <div className="col-md-8 boards-list">Select one board...</div>
  }

  return (
    <IgnoreLists lists={lists}/>
  );
};

export default ListConfiguration;
