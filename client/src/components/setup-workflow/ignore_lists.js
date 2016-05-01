'use strict';
import React from 'react';
import { DropTarget } from 'react-dnd';
import IgnoreListsItem from './ignore_lists_item';

const listTarget = {
  drop(props, monitor) {
    const list = monitor.getItem();
    props.onMoveList({
      list: list.list,
      destination: 'ignoreLists'
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const IgnoreLists = (props) => {
  const listItems = props.lists.map((list) => {
    return (
      <IgnoreListsItem key={list.id} list={list}/>
    );
  });

  const { isOver, canDrop, connectDropTarget } = props;
  return connectDropTarget(
      <ul className="col-md-12 list-group column-small">
        <li className="column-title">Ignore lists</li>
        {listItems}
      </ul>
  );
}

export default DropTarget('list', listTarget, collect)(IgnoreLists);
