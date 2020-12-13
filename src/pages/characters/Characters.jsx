import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchCharacterStart } from '../../redux/character/character.action'

import CharacterCard from '../../components/characterCard/CharacterCard'
import Spinner from '../../components/spinner/spinner.component'

import './characters.style.scss'

function Characters({ characters, fetchCharacterStart, isLoading }) {

  useEffect(() => {
    fetchCharacterStart()
  }, [fetchCharacterStart])

  return (
    <div className="characters pageContainer max-width-big-desktop">
      <h1 className="title">角色介紹</h1>
      <div className="characters__cards">
        {
          isLoading ?
            <Spinner /> :
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
    characters: state.character.characters,
    isLoading: state.character.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacterStart: () => {
      dispatch(fetchCharacterStart())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);