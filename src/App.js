import React from 'react';
import './App.css';
import Image from './Image.js'
import './Chat.css';
import './UserInput.css';
// import {
//   Bubbles,
//   prepHTML
// } from "../node_modules/chat-bubble/component/Bubbles";

const MSG_SENDER_USER = "user";
const MSG_SENDER_BOT = "bot";


class App extends React.Component {
  render() {
    // prepHTML({ relative_path: "../node_modules/chat-bubble/" });
    var html = new ChatBox(conversation).render();
    console.log(html);
    return html;
  }
}

class BubbleContent extends React.Component {
  constructor(props) {
    super(props);
    this.sender = props.value.recipient_id || props.sender
    this.type = props.value.type
    this.text = props.value.text
    this.image = props.value.image
  }

  render() {
    if (this.text != null) {
      return <span className='bubble-content'>{this.text}</span>
    }
    else if (this.image != null) {
      var image_details = { url: this.image, title: "", classes: "" };
      return <span className='bubble-content'><Image value={image_details}></Image></span>
    }
    return <span className='bubble-content'></span>
  }
}


class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.sender = props.value.recipient_id || props.sender
    this.type = props.value.type
    this.text = props.value.text
    this.image = props.value.image
    // console.log(props)
  }

  render() {
    if (this.type === MSG_SENDER_BOT) {
      return (
        <div className="bubble reply say"><BubbleContent value={this.props.value}></BubbleContent></div>
      )
    } else {
      return (
        <div className="bubble say"><BubbleContent value={this.props.value}></BubbleContent></div>
      )
    }
  }
}


class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.messages = props;
    for (var i = 0; i < this.messages.length; i++) {
      console.log(this.messages[i])
    }
  }

  renderBubble(message) {
    return (
      // new Bubble(this.messages[i])
      <Bubble value={message} >
      </Bubble>
    );
  }

  render() {
    return (
      <div id='chat' className='bubble-container'>
        <div className='bubble-wrap'>{this.messages.map(msg => this.renderBubble(msg))}</div>
        <TextField value={null}></TextField>
      </div>
    )
  }
}


class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.value = props.value
  }

  render() {
    return (
      <div className="input-wrap"><input type="text" id="chatInput" name="userInput" placeholder="Ask me any question..."></input></div>
    
    )
  }

}


var conversation = [
  {
    "sender": "first-user",
    "text": "Hi",
    "type": MSG_SENDER_USER
  },
  {
    "recipient_id": "first-user",
    "text": "Hey there, welcome!",
    "type": MSG_SENDER_BOT
  },
  {
    "sender": "first-user",
    "text": "What is AI?",
    "type": MSG_SENDER_USER
  },
  {
    "recipient_id": "first-user",
    "text": "AI is artificial intelligence. Like me I'm an AI, although not a super intelligent one.",
    "type": MSG_SENDER_BOT
  },
  {
    "sender": "first-user",
    "text": "Show me a tiger.",
    "type": MSG_SENDER_USER
  },
  {
    "recipient_id": "first-user",
    "image": "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_full/77ic6i4qdj_Medium_WW226365.jpg",
    "type": MSG_SENDER_BOT
  }
]

export default App;
