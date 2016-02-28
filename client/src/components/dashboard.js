import React, { Component } from 'react';
import BoardList from './boards_list';

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
      <BoardList boards={this.state.boards}/>
    );
  }
}

export default BoardSettings;
