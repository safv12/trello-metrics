'use strict';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardList from './boards_list';
import ListConfiguration from './lists_configuration';
import MetricsControllers from './metrics_controllers';

class SetupWorkflow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      openLists: [],
      doneLists: [],
      ignoreLists: [],
      inprogressLists: [],
      selectedBoard: null,
      onTimeMetrics: null
    };

    this.baseurl = 'http://localhost:9001/v1';
    this.getBoards(this.baseurl);

  }


  getBoards(base) {
    var _this = this;
    $('#loading').css('display', 'block');

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: base + '/trello/me/boards',
      success: function(boards) {
        $('#loading').css('display', 'none');
        _this.setState({
          boards: boards,
          selectedBoard: boards[0]
        });

        _this.getLists(boards[0], base);
      }
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


  getLists(board, base) {
    $('#loading').css('display', 'block');
    var _this = this;
    $.ajax({
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      url: base + `/trello/boards/${board.id}/lists`,
      success: function(lists) {
        $('#loading').css('display', 'none');
        _this.setState({
          ignoreLists: lists,
          inprogressLists: [],
          openLists: [],
          doneLists: []
        });
      }
    });
  }


  getTimeMetrics() {
    var onTimeMetrics = this.props.onTimeMetrics;
    $('#loading').css('display', 'block');

    $.ajax({
      type: 'POST',
      data: JSON.stringify({
        open: this.state.openLists,
        inprogress: this.state.inprogressLists,
        done: this.state.doneLists
      }),
      contentType: 'application/json',
      dataType:'json',
      url: this.baseurl + '/metrics/',
      success: function(res) {
        $('#loading').css('display', 'none');
        onTimeMetrics(res);
      }
    });
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="col-md-2 padding-s">
          <BoardList
            onBoardSelect={selectedBoard => this.setState({selectedBoard})}
            selectedBoard={ this.state.selectedBoard }
            onBoardClick={id => this.getLists({id}, this.baseurl)}
            boards={this.state.boards} />
        </div>

        <ListConfiguration
          onMoveList={ param => this.moveList({param}) }
          ignoreLists={this.state.ignoreLists}
          openLists={this.state.openLists}
          inprogressLists={this.state.inprogressLists}
          doneLists={this.state.doneLists} />

        <div className="col-md-2 padding-s">
          <MetricsControllers
            getTimeMetrics={ param => this.getTimeMetrics() }
            saveMetrics={ this.props.saveMetrics() }
            timeMetrics={ this.props.timeMetrics }/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(SetupWorkflow);
