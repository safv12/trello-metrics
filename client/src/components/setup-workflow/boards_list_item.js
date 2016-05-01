'use strict';
import React from 'react';

const BoardListItem = ({board, onBoardSelect, onBoardClick,
selectedBoardId}) => {
  return (
    <li
      onClick={() => {
        onBoardSelect(board);
        onBoardClick(board.id);
      }}
      className={board.id === selectedBoardId
        ? 'item-selected' : 'column-item'}>
        {board.name}
    </li>
  );
};

export default BoardListItem;
