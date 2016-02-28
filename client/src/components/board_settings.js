import React from 'react';
import { Component } from 'react';

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
      <div>Board settings</div>
    );
  }
}

export default BoardSettings;
