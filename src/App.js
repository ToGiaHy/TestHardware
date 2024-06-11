import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="App">
      <h1>Twilio Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.sid}>
            <p>From: {message.from}</p>
            <p>To: {message.to}</p>
            <p>Body: {message.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
