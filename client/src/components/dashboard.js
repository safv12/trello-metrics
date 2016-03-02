import React, { Component } from 'react';
import BoardList from './boards_list';
import ListConfiguration from './lists_configuration';

class BoardSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      selectedBoard: null
    };

    Trello.get('/members/me/boards').then((boards) => {
      this.setState({
        boards: boards,
        selectedBoard: boards[0]
      });
    });
  }

  render() {
    return (
      <div>
        <BoardList
          onBoardSelect={selectedBoard => this.setState({selectedBoard})}
          selectedBoard={ this.state.selectedBoard }
          boards={this.state.boards} />
        <ListConfiguration board={this.state.selectedBoard}/>
      </div>
    );
  }
}

export default BoardSettings;
