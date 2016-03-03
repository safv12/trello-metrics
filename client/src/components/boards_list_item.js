import React from 'react';

const BoardListItem = ({board, onBoardSelect, onBoardClick, selectedBoardId}) => {
  return (
    <li
      onClick={() => {
        onBoardSelect(board);
        onBoardClick(selectedBoardId);
      }}
      className={board.id === selectedBoardId ? 'board-selected' : 'boards-list-item '}>
        {board.name}
    </li>
  );
};

export default BoardListItem;
