import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: '...',
      message: 'What up',
    },
    {
      image: '...',
      message: 'Good, and you?',
    },
    {
      name: 'Ellen',
      image: '...',
      message: 'I am perfect!',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          type="text"
          className="chatScreen__inputField"
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
