import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardList from './boards_list';
import ListConfiguration from './lists_configuration';

class BoardSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      ignoreLists: [],
      inprogressLists: [],
      openLists: [],
      selectedBoard: null
    };

    this.getBoards();
  }


  getBoards() {
    Trello.get('/members/me/boards').then((boards) => {
      this.setState({
        boards: boards,
        selectedBoard: boards[0]
      });

      this.getLists(boards[0]);
    });
  }


  moveList(movement) {
    var destination = this.state[movement.param.destination];
    destination.push(movement.param.list);
    var list = movement.param.list;
    var source = this.state[list.source];
    var itemIndex = source.indexOf(list);
    source.splice(itemIndex, 1);

    this.setState({
      [destination]: destination
    });

    this.setState({
      [list.source]: source
    });
  }


  getLists(board) {
    Trello.get(`/boards/${board.id}/lists`).then((lists) => {
      this.setState({
        ignoreLists: lists
      });
    });
  }


  render() {
    return (
      <div className="col-md-12">
        <BoardList
          // TODO: Clean all lists after select board
          onBoardSelect={selectedBoard => this.setState({selectedBoard})}
          selectedBoard={ this.state.selectedBoard }
          onBoardClick={id => this.getLists({id})}
          boards={this.state.boards} />

        <ListConfiguration
          onMoveList={ param => this.moveList({param}) }
          ignoreLists={this.state.ignoreLists}
          openLists={this.state.openLists} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(BoardSettings);
