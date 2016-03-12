import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import OpenLists from './open_lists';
import DoneLists from './done_lists';
import IgnoreLists from './ignore_lists';
import InprogressLists from './inprogress_lists';

const ListConfiguration = ({ignoreLists, openLists, onMoveList, inprogressLists, doneLists}) => {
  return (
    <div>
      <IgnoreLists
        className="col-md-3 list-group boards-list"
        lists={ ignoreLists }
        onMoveList={onMoveList} />
      <OpenLists
        className="col-md-3 list-group boards-list"
        lists={ openLists }
        onMoveList={onMoveList} />
      <InprogressLists
        className="col-md-3 list-group boards-list"
        lists={ inprogressLists }
        onMoveList={onMoveList} />
      <DoneLists
        className="col-md-3 list-group boards-list"
        lists={ doneLists }
        onMoveList={onMoveList} />
    </div>
  );
};

export const ItemTypes = {
  CARD: 'card'
};

export default ListConfiguration;
