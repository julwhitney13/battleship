import React from 'react';
import Ship from './ship';

import { Grid, Row } from 'react-bootstrap';


export default class Ships extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  placeShip(c, o, s) {
      this.props.playerChannel.push("place", {coord: c, orient: o, ship: s})
        .receive("ok", state => this.setState(state));
  }

  render() {
    return (
        <Grid>
            <Row>
              {
                  this.state.ships_to_place.map((ship) =>
                      <Ship key={ship} size={ship} placeShip={this.placeShip.bind(this)}/>
                  )
              }
            </Row>
        </Grid>
    );
  }
}
