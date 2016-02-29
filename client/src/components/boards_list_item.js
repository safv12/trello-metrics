import React from 'react';

const BoardListItem = (props) => {
  return (
    <li className="boards-list-item">{props.board.name}</li>
  );
};

export default BoardListItem;
