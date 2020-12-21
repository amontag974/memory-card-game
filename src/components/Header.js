import React from 'react';

function Header(props) {

  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="scores-container">
        <div className="current-score-container">
          <span className="score-type">Current Score </span>
          <span className="score">{props.currentScore}</span>
        </div>
        <div className="high-score-container">
          <span className="score-type">High Score </span>
          <span className="score">{props.highScore}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;