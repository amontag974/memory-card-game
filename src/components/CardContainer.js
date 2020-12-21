import React from 'react';
import Card from './Card';
import cardImages from '../cardImages'

function CardContainer(props) {
  const cardIDOrder = props.shuffleCards();

  const getCardArray = cardIDOrder => {
    const cardArray = [];

    for(let i = 0; i < cardIDOrder.length; i++) {
      let currentCardID = cardIDOrder[i];
      let card = binarySearch(cardImages, currentCardID);
      
      cardArray.push(card);
    }

    return cardArray;
  }

  const binarySearch = (cardArray, cardID) => {
    let newCardArray;
    let midpoint = Math.floor(cardArray.length / 2)

    if (cardArray.length > 1) {
      if (cardID < cardArray[midpoint].id) {
        newCardArray = cardArray.slice(0, midpoint);
        return binarySearch(newCardArray, cardID);
      }
      else {
        newCardArray = cardArray.slice(midpoint);
        return binarySearch(newCardArray, cardID);
      }
    }

    return cardArray[0];
  }

  const createCards = () => {
    const cardArray = getCardArray(cardIDOrder)

    const cards = cardArray.map( image => {
      return (
        <Card
          key={image.id} 
          src={image.src}
          id={image.id}
          onClick={props.onClick}
        />
      );
    });
    return cards;
  }

  return (
    <div className="card-container">
      {createCards()}
    </div>
  );
}

export default CardContainer;