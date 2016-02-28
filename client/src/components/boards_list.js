import React from 'react';
import BoardListItem from './boards_list_item';

const BoardList = (props) => {
  const boards = props.boards.map((board) => {
    return <BoardListItem key={board.id} board={board} />;
  });

  return (
    <ul className="col-md-4 list-group">
      { boards }
    </ul>
  );
};

export default BoardList;
