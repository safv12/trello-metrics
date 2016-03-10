import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import OpenLists from './open_lists';
import DoneLists from './done_lists';
import IgnoreLists from './ignore_lists';
import InprogressLists from './inprogress_lists';

const ListConfiguration = ({ignoreLists, openLists, onMoveList}) => {
  if (!ignoreLists.length) {
    return <div className="col-md-8 boards-list">Select one board...</div>
  }

  return (
    <div>
      <IgnoreLists
        className="col-md-3 list-group boards-list"
        lists={ ignoreLists } />
      <OpenLists
        className="col-md-3 list-group boards-list"
        lists={ openLists }
        onMoveList={onMoveList} />
      <InprogressLists className="col-md-3 list-group boards-list" />
      <DoneLists className="col-md-3 list-group boards-list" />
    </div>
  );
};

export const ItemTypes = {
  CARD: 'card'
};

export default ListConfiguration;
