import React from 'react';
import { DropTarget } from 'react-dnd';
import DoneListsItem from './done_list_item'

const listTarget = {
  drop(props, monitor, component) {
    const list = monitor.getItem();
    console.log('==list done==');
    console.log(list);
    return { moved: true };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const DoneLists = (props) => {
  const { isOver, canDrop, connectDropTarget } = props;
  return connectDropTarget(
      <ul className="col-md-2 list-group column-small">
        <li className="column-title">Done lists</li>
      </ul>
  );
}

export default DropTarget('list', listTarget, collect)(DoneLists);
