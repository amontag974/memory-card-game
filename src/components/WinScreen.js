import React from 'react';

function WinScreen(props) {
  let winScreen = null;

  if (props.currentScore === 12 ) {
    winScreen = (<div className="win-screen">
      <h2 className="win-screen-header">You Win!</h2>
      <span className="win-screen-text">Click any square to start a new game</span>
    </div>)
  }

  return <>{winScreen}</>;
}

export default WinScreen;