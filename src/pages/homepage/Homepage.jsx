import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { setPostCards } from '../../redux/postCard/postCard.action'

import PostCard from '../../components/postCard/PostCard'

import './homepage.style.scss'


function Homepage({ postCards, setPostCards }) {

  function generateAniDelay(index) {
    return {
      animationDelay: index + 's'
    }
  }

  useEffect(() => {
    setPostCards()
  }, [setPostCards])


  return (

    <div className="homepage pageContainer max-width-big-desktop">
      <div className="homepage__img" />
      <h1 className="title">最新貼文</h1>
      <div className="homepage__post">
        <div className="homepage__post--cards">
          {
            postCards.map((card, index) => {
              return <PostCard key={card.id} media={card.media} mediaIcon={card.mediaIcon} photo={card.photo} date={card.date} link={card.link} style={generateAniDelay(index)} />
            })
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postCards: state.postCards.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPostCards: () => {
      dispatch(setPostCards())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);