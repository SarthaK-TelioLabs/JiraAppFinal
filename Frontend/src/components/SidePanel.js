// src/components/SidePanel.js
import React, { useState } from 'react';
import './SidePanel.css';

function SidePanel({ history }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const truncateMessage = (message, maxLength = 30) => {
    return message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
  };

  const handleBoxClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="side-panel">
      <div className="logo">TelioLabs Pvt LTD</div>
      {history.slice().reverse().map((entry, index) => (
        <div 
          key={index} 
          className={`history-box ${expandedIndex === index ? 'expanded' : ''}`}
          onClick={() => handleBoxClick(index)}
        >
          <div className="user-message" title={entry.user}>
            {truncateMessage(entry.user)}
          </div>
          {expandedIndex === index && (
            <div className="full-message">
              <div><strong>User: </strong> {entry.user}</div>
              <div><strong>Bot: </strong> {entry.bot}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SidePanel;
