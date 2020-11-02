import React from 'react';

import CharacterCard from '../../components/characterCard/CharacterCard'

import dummyDate from './DummyCharacters'
import './characters.style.scss'

function Characters(props) {
  return (
    <div className="characters pageContainer">
      <h1 className="title">角色介紹</h1>
      <div className="characters__cards">
        {
          dummyDate.map((character) => {
            return <CharacterCard key={character.id} name={character.name} characterImg={character.characterImg} intro={character.intro} />
          })
        }
      </div>

    </div>
  );
}

export default Characters;