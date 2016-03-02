import React from 'react';

const BoardListItem = ({board, onBoardSelect, selectedBoardId}) => {
  return (
    <li
      onClick={() => { onBoardSelect(board) }}
      className={board.id === selectedBoardId ? 'board-selected' : 'boards-list-item '}>
        {board.name}
    </li>
  );
};

export default BoardListItem;
