import React from 'react';

function Card(props) {
  return (
    <div className="img-container" onClick={props.onClick}>
      <img src={props.src} id={props.id} alt={`img-${props.id}`}></img>
    </div>
  )
}

export default Card;