import React from 'react';
import { DropTarget } from 'react-dnd';

const listTarget = {
  drop(props, monitor, component) {
    const list = monitor.getItem();
    console.log('==list in progress==');
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

const InprogressLists = (props) => {
  const { isOver, canDrop, connectDropTarget } = props;
  return connectDropTarget(
      <ul className="col-md-2 list-group column-small">
        <li className="column-title">In progress lists</li>
      </ul>
  );
}

export default DropTarget('list', listTarget, collect)(InprogressLists);
