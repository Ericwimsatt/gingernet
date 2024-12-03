import React from 'react';
import { Link } from 'react-router-dom';
import './Statesmanship.css';

export const Statesmanship: React.FC = () => {
  return (
    <div className="statesmanship-page">
      <div className="statesmanship-container">
        <h1>Statesmanship</h1>
        <div className="game-description">
          <p>Welcome to Statesmanship, an engaging game that challenges your knowledge of U.S. states!</p>
          <p>Test your geographic intuition by guessing a mystery state based on clever hints. Each guess provides new clues about the state's location, climate, and characteristics.</p>
          <p>Perfect for geography enthusiasts, students, or anyone looking to explore America's diverse landscapes.</p>
        </div>
        <Link to="/statesmanship/play" className="rustic-button">
          Play Now
        </Link>
      </div>
    </div>
  );
};
