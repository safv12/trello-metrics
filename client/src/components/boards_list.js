import React from 'react';
import BoardListItem from './boards_list_item';

const BoardList = (props) => {

  var loading = '';
  if (!props.boards.length) {
    loading = <li className="column-title">Loading...</li>
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
    <ul className="col-md-2 list-group column-small">
      <li className="column-title">Your boards</li>
      { loading }
      { boards }
    </ul>
  );
};

export default BoardList;
