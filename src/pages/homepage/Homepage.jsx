import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getPostCards } from '../../redux/postCard/postCard.action'

import PostCard from '../../components/postCard/PostCard'

import './homepage.style.scss'


function Homepage({ postCards, getPostCards }) {

  function generateAniDelay(index) {
    return {
      animationDelay: index + 's'
    }
  }

  useEffect(() => {
    getPostCards()
  }, [getPostCards])


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
    postCards: state.postCard.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostCards: () => {
      dispatch(getPostCards())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);