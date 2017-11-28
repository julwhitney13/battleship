import React from 'react';

import Tiles from './tiles.js';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  onGuess(coord) {
    this.props.channel.push("guess", {coord: coord}).
      receive("ok", state => this.setState(state));
  }

  render() {
    return (
          <div className="col-sm-6">
            <Tiles game={this.state} guess={this.onGuess.bind(this)} />
          </div>
    );
  }
}
