import React, { Component } from 'react';
import BoardList from './boards_list';
import ListConfiguration from './lists_configuration';

class BoardSettings extends Component {
  constructor(props) {
    super(props);

    this.state = { boards: [] };
    Trello.get('/members/me/boards').then((boards) => {
      this.setState({ boards });
    });
  }

  render() {
    return (
      <div>
        <BoardList boards={this.state.boards}/>
        <ListConfiguration board={this.state.boards[0]}/>
      </div>
    );
  }
}

export default BoardSettings;
