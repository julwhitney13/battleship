import React from 'react';
import ReactDOM from 'react-dom';

import { Col, Image, FormGroup, Button, FormControl } from 'react-bootstrap';

export default class Ship extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        filename: this.getFileName()
    }
  }

  getFileName() {
    return "images/" + this.props.size + ".jpg";
  }

  placeShip(e) {
        e.preventDefault()
        let c = ReactDOM.findDOMNode(this.refs.text).value.trim()
        let o = ReactDOM.findDOMNode(this.refs.orient).value.trim()
        ReactDOM.findDOMNode(this.refs.text).value = ""
        ReactDOM.findDOMNode(this.refs.orient).value.trim()
        this.props.placeShip(c, o, this.props.size)
  }


  render() {
    return (
          <div>
            <Col style={{ width: 100 }}>
                <Image src={this.state.filename} thumbnail />
                <form onSubmit={this.placeShip.bind(this)}>
                    <FormGroup>
                      {'Enter the First Coordinate (e.g. 11)'}
                      <FormControl type="text" ref="coord"/>
                    </FormGroup>
                    <FormGroup>
                      {'Enter V for Vertical or H for Horizontal'}
                      <FormControl type="text" ref="orient"/>
                    </FormGroup>
                    {' '}
                    <Button type="submit">
                      Place
                    </Button>
                  </form>
            </Col>
          </div>
    );
  }
}
