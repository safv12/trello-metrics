import React from 'react';
import { DropTarget } from 'react-dnd';
import DoneListsItem from './done_list_item'

const listTarget = {
  drop(props, monitor, component) {
    const list = monitor.getItem();
    props.onMoveList({
      list: list.list,
      destination: 'doneLists'
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const DoneLists = (props) => {
  const listItems = props.lists.map((list) => {
    return (
      <DoneListsItem key={list.id} list={list}/>
    );
  });

  const { isOver, canDrop, connectDropTarget } = props;
  return connectDropTarget(
      <ul className="col-md-12 list-group column-small">
        <li className="column-title">Done lists</li>
        {listItems}
      </ul>
  );
}

export default DropTarget('list', listTarget, collect)(DoneLists);
