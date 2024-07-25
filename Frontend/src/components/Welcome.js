// src/components/Welcome.js
import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome-box">
      <p>
        TicketSolver is your go-to chatbot for all things related to resolving Jira tickets quickly and efficiently using AI. Whether you're a team member looking to troubleshoot a specific issue or a project manager aiming to streamline the resolution process.
      </p>
      <p>
        Feel free to inquire about specific Jira ticket issues, get detailed solutions, or ask for general advice on how to handle common problems. TicketSolver leverages advanced AI to analyze and provide accurate and up-to-date information, ensuring that you can tackle your Jira challenges with confidence.
      </p>
      <p>
        Just type your queries or describe your Jira ticket issues, and I'll ensure you receive the best possible solutions. TicketSolver is your virtual guide, ready to assist and inform, helping you navigate the complexities of Jira with ease. Let's embark on this journey to efficient ticket resolution together!
      </p>
    </div>
  );
}

export default Welcome;
