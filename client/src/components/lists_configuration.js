import React, { Component } from 'react';
import IgnoreLists from './ignore_lists';
import OpenLists from './open_lists';
import InprogressLists from './inprogress_lists';
import DoneLists from './done_lists';

const ListConfiguration = ({lists}) => {
  if (!lists.length) {
    return <div className="col-md-8 boards-list">Select one board...</div>
  }

  return (
    <div>
      <IgnoreLists className="col-md-3 list-group boards-list" lists={lists}/>
      <OpenLists className="col-md-3 list-group boards-list" />
      <InprogressLists className="col-md-3 list-group boards-list" />
      <DoneLists className="col-md-3 list-group boards-list" />
    </div>
  );
};

export default ListConfiguration;
