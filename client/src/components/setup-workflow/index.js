import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardList from './boards_list';
import ListConfiguration from './lists_configuration';
import MetricsControllers from './metrics_controllers'

class SetupWorkflow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      openLists: [],
      doneLists: [],
      ignoreLists: [],
      inprogressLists: [],
      selectedBoard: null
    };

    this.getBoards();
    this.baseurl = 'http://localhost:9001/v1';
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
        ignoreLists: lists,
        inprogressLists: [],
        openLists: [],
        doneLists: []
      });
    });
  }


  getCycleTime(param) {
    $.ajax({
      type: 'POST',
      data: JSON.stringify({
        open: this.state.openLists,
        inprogress: this.state.inprogressLists,
        done: this.state.doneLists
      }),
      contentType: "application/json",
      dataType:'json',
      url: this.baseurl + '/metrics/cycletime',
      success: function(res) {
        console.log(res);
      }
    });
  }


  render() {
    return (
      <div className="col-md-12">
        <BoardList
          onBoardSelect={selectedBoard => this.setState({selectedBoard})}
          selectedBoard={ this.state.selectedBoard }
          onBoardClick={id => this.getLists({id})}
          boards={this.state.boards} />

        <ListConfiguration
          onMoveList={ param => this.moveList({param}) }
          ignoreLists={this.state.ignoreLists}
          openLists={this.state.openLists}
          inprogressLists={this.state.inprogressLists}
          doneLists={this.state.doneLists} />

        <MetricsControllers
          getCycleTime={ param => this.getCycleTime() }/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(SetupWorkflow);
