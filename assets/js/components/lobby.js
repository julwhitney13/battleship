import React from 'react';
import Message from './message'
import MessageInput from './messageInput'

export default class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'messages': []
    }
    // this.props.channel.on("newChallenge", this.startGame)
    this.props.tableChannel.on("message", payload => {
      this.setState({messages: this.state.messages.concat([payload.body])})
    })
  }

  handleMessageSubmit(message) {
      message.user = this.props.user
      this.props.tableChannel.push("message", {body: message})
  }

  // startGame() {
  //     this.props.channel.join()
  //       .receive("ok", state0 => {
  //         console.log("Joined successfully", state0 )
  //         renderGame(this.props.channel, state0)
  //       })
  //       .receive("error", resp => { console.log("Unable to join", resp) })
  // }
  //
  // renderGame() {
  //     let root = document.getElementById('root');
  //     ReactDOM.render(<Game state={this.state} channel={this.props.channel} />, root)
  // }
  //
  render() {
    return (
        <div>
            <ul className="chats" ref="chats">
                {
                    this.state.messages.map((message) =>
                        <Message content={message} />
                    )
                }
            </ul>
            <MessageInput onMessageSubmit={this.handleMessageSubmit.bind(this)}/>
        </div>
    );
  }
}
