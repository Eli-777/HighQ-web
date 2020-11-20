import React from 'react';

import './characterCard.style.scss'

function CharacterCard({ name, characterImg, intro }) {
  return (
    <div className="characterCard">
      <div className="card__side card__side--front">
        <img src={characterImg} alt="Character" className="characterImg" />
        <div className="triangle triangle-1"></div>
        <div className="triangle triangle-2"></div>
      </div>
      <div className="card__side card__side--back">
        <div className="character__content">
          <h1 className="character__content--name">{name} :</h1>
          <p className="character__content--intro">
            {intro.intro1}
          </p>
          <p className="character__content--intro">
            {intro.intro2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;