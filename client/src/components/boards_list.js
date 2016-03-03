import React from 'react';
import BoardListItem from './boards_list_item';

const BoardList = (props) => {
  if (!props.boards.length) {
    return <div>Loading...</div>
  }

  const boards = props.boards.map((board) => {
    return (
      <BoardListItem
        onBoardSelect = {props.onBoardSelect}
        onBoardClick = {props.onBoardClick}
        selectedBoardId = {props.selectedBoard.id}
        key={board.id} board={board} />
    );
  });

  return (
    <ul className="col-md-3 list-group boards-list">
      { boards }
    </ul>
  );
};

export default BoardList;
