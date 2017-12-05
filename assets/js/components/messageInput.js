// Referenced https://hashrocket.com/blog/posts/integrating-react-components-with-a-phoenix-application

import React from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';
export default class MessageInput extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault()
    let text = ReactDOM.findDOMNode(this.refs.text).value.trim()
    let date = (new Date()).toLocaleTimeString()
    ReactDOM.findDOMNode(this.refs.text).value = ""
    this.props.onMessageSubmit({text: text, date: date})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            {' '}
            <FormControl type="text" ref="text"/>
          </FormGroup>
          {' '}
          <Button type="submit">
            Send
          </Button>
        </form>
    )
  }
}
