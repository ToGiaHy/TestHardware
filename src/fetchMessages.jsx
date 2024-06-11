import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://receivesms-7270.twil.io/receive-sms');
      setMessages([...messages, response.data]);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchMessages, 5000); // fetch messages every 5 seconds
    return () => clearInterval(intervalId);
  }, [messages]);

  return (
    <div>
      <h2>Received Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            From: {message.from}, Message: {message.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchMessages;