import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getCharacter } from '../../redux/character/character.action'

import CharacterCard from '../../components/characterCard/CharacterCard'

import './characters.style.scss'

function Characters({ characters, getCharacter }) {

  useEffect(() => {
    getCharacter()
  }, [getCharacter])

  return (
    <div className="characters pageContainer max-width-big-desktop">
      <h1 className="title">角色介紹</h1>
      <div className="characters__cards">
        {
          characters.map((character) => {
            return <CharacterCard key={character.id} name={character.name} characterImg={character.characterImg} intro={character.intro} />
          })
        }
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.character.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacter: () => {
      dispatch(getCharacter())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);