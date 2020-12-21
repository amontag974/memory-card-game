import React, { useState } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import WinScreen from './components/WinScreen';
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selections, setSelections] = useState([]);

  const handleClick = e => {

    let tempCurrentScore = currentScore + 1;
    
    if (selections.includes(e.target.id)) {
      setCurrentScore(0);
      setSelections([]);

    } else {
      const newSelections = [...selections];
      newSelections.push(e.target.id);
      setSelections(newSelections);
      checkMaxScore(tempCurrentScore);
      setCurrentScore(tempCurrentScore);
    }
  }

  const checkMaxScore = currentScore => {
    if (currentScore >= highScore) {
      const tempScore = currentScore
      setHighScore(tempScore);
    }
  }

  const shuffleCards = () => {
    const cardIDOrder = [];
    let card = pickCard();

    while(cardIDOrder.length < 12) {
      if (cardIDOrder.includes(card)) {
        card = pickCard();
      } 
      else {
        cardIDOrder.push(card);
      }
    }
    
    return cardIDOrder;
  }

  const pickCard = () => {
    const card = Math.floor(Math.random()*12);
    return card;
  }
  
  return (
    <>
      <div className="game">
        <Header
          currentScore = {currentScore}
          highScore = {highScore}
        />
        <CardContainer
          onClick = {handleClick}
          shuffleCards = {shuffleCards}
        />
      </div>
      <WinScreen 
        currentScore = {currentScore}
      />
    </>
  );
}

export default App;
