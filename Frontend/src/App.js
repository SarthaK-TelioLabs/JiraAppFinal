// src/App.js
import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import SidePanel from './components/SidePanel';

function App() {
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSendMessage = async (userMessage) => {
    console.log('Sending user message to API:', userMessage);

    // Make API request to get the bot response
    try {
      const response = await fetch('http://127.0.0.1:8000/api/find-solution/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage }),
      });

      console.log('API response status:', response.status);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('API response data:', data);

      const botResponse = data.solution;

      // Update the messages state with both user and bot messages
      const newMessage = { user: userMessage, bot: botResponse };
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);

      if (newMessages.length > 3) {
        setHistory([...history, newMessages.shift()]);
        setMessages(newMessages);
      }
    } catch (error) {
      console.error('Error fetching the bot response:', error);

      // Update the messages state with an error message
      const newMessage = { user: userMessage, bot: 'Error: Unable to get a response from the server.' };
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);

      if (newMessages.length > 3) {
        setHistory([...history, newMessages.shift()]);
        setMessages(newMessages);
      }
    }
  };

  return (
    <div className="App">
      <div className="side-panel">
        <SidePanel history={history} />
      </div>
      <div className="main-panel">
        <Welcome />
        <InputBox onSendMessage={handleSendMessage} />
        <OutputBox messages={messages} />
      </div>
    </div>
  );
}

export default App;
