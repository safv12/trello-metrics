import React from 'react';
import { DropTarget } from 'react-dnd';
import OpenListItem from './open_lists_item'

const listTarget = {
  drop(props, monitor, component) {
    const list = monitor.getItem();
    props.onMoveList({
      list: list.list,
      destination: 'openLists'
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const OpenLists = (props) => {
  const listItems = props.lists.map((list) => {
    return (
      <OpenListItem key={list.id} list={list}/>
    );
  });

  const { isOver, canDrop, connectDropTarget } = props;
  return connectDropTarget(
      <ul className="col-md-2 list-group column-small">
        <li className="column-title">Open lists</li>
        {listItems}
      </ul>
  );
}

export default DropTarget('list', listTarget, collect)(OpenLists);
