import React from 'react';

import Tiles from './tiles';
import Ships from './ships';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  onGuess(coord) {
    this.props.playerChannel.push("guess", {coord: coord}).
      receive("ok", state => this.setState(state));
  }

  render() {
    return (
        <div>
          <div className="col-sm-10">
            <h1>My Ships</h1>
            <Tiles game={this.state} guess={this.onGuess.bind(this)} />
            <h1>My Opponent</h1>
            <Tiles game={this.state} guess={this.onGuess.bind(this)} />
          </div>
          <div className="col-sm-2">
            <Ships state={this.state} />
          </div>
          </div>
    );
  }
}
