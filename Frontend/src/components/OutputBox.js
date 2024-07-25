import React, { useRef, useEffect, useState } from 'react';
import './OutputBox.css';

function OutputBox({ messages }) {
  const outputBoxRef = useRef(null);
  const [displayMessages, setDisplayMessages] = useState([]);

  useEffect(() => {
    const outputBox = outputBoxRef.current;
    let totalHeight = 0;
    let displayCount = 0;

    for (let i = messages.length - 1; i >= 0; i--) {
      const tempElement = document.createElement('div');
      tempElement.className = 'message';
      tempElement.innerHTML = `<div class="user-message">${messages[i].user}</div><div class="bot-response">${messages[i].bot}</div>`;
      outputBox.appendChild(tempElement);
      const elementHeight = tempElement.offsetHeight;
      outputBox.removeChild(tempElement);

      totalHeight += elementHeight;
      if (totalHeight <= outputBox.offsetHeight) {
        displayCount++;
      } else {
        break;
      }
    }

    setDisplayMessages(messages.slice(-displayCount).reverse());
  }, [messages]);

  return (
    <div className="output-box" ref={outputBoxRef}>
      {displayMessages.map((msg, index) => (
        <div key={index} className="message">
          <div className="user-message2">User - {msg.user}</div>
          <div className="bot-response">Bot - {msg.bot}</div>
        </div>
      ))}
    </div>
  );
}

export default OutputBox;
