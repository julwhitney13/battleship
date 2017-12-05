import React from 'react';
import { Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

class Tile extends React.Component {

  click() {
    this.props.clk(this.props.xy);
  }

  render() {
    return (
        <Button onClick={this.click.bind(this)} disabled={this.props.disabled} bsSize="large" bsStyle={this.props.color}>
        &nbsp;&nbsp;&nbsp;</Button>
    );
  }
}

export default class Tiles extends React.Component {

  click(tile_coord) {
    this.props.guess(tile_coord);
  }

  color(tile_coord) {
    if (this.props.game.hits.includes(tile_coord)) {
        return "danger"
    }
    if (this.props.game.misses.includes(tile_coord)) {
        return "default"
    }
    return "info"
  }

  isDisabled(tile_coord) {
      let clicked = this.props.game.hits.concat(this.props.game.misses)
      return clicked.includes(tile_coord)
  }

  render() {
    let buttons = [[],[],[],[],[],[],[],[],[],[]]
    for (var y = 0; y < 10; y++) {
        for (var x = 0; x < 10; x++) {
            var coord = x.toString() + y.toString()
            buttons[x][y] = <Tile xy={coord}
                                  key={coord}
                                  clk={this.click.bind(this)}
                                  disabled={this.isDisabled(coord)}
                                  color={this.color(coord)}
                            />
        }
    }
    return (
    <ButtonToolbar>
        <ButtonGroup>
            {buttons[0]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[1]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[2]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[3]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[4]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[5]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[6]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[7]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[8]}
        </ButtonGroup>
        <ButtonGroup>
            {buttons[9]}
        </ButtonGroup>
    </ButtonToolbar>
    );
  }
}
