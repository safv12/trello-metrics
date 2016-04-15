import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import OpenLists from './open_lists';
import DoneLists from './done_lists';
import IgnoreLists from './ignore_lists';
import InprogressLists from './inprogress_lists';

const ListConfiguration = ({ignoreLists, openLists, onMoveList, inprogressLists, doneLists}) => {
  return (
    <div>
      <div className="col-md-2 padding-s">
        <IgnoreLists
          className="list-group boards-list"
          lists={ ignoreLists }
          onMoveList={onMoveList} />
      </div>

      <div className="col-md-2 padding-s">
        <OpenLists
          className="list-group boards-list"
          lists={ openLists }
          onMoveList={onMoveList} />
      </div>

      <div className="col-md-2 padding-s">
        <InprogressLists
          className="list-group boards-list"
          lists={ inprogressLists }
          onMoveList={onMoveList} />
      </div>

      <div className="col-md-2 padding-s">
        <DoneLists
          className="list-group boards-list"
          lists={ doneLists }
          onMoveList={onMoveList} />
      </div>
    </div>
  );
};

export const ItemTypes = {
  CARD: 'card'
};

export default ListConfiguration;
