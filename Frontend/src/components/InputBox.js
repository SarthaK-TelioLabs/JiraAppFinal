// src/components/InputBox.js
import React, { useState } from 'react';

function InputBox({ onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-box">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Your input message here"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputBox;
