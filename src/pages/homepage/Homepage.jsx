import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchPostCardsStart } from '../../redux/postCard/postCard.action'


import PostCard from '../../components/postCard/PostCard'
import Spinner from '../../components/spinner/spinner.component'

import './homepage.style.scss'


function Homepage({ postCards, fetchPostCards, isLoading }) {

  function generateAniDelay(index) {
    return {
      animationDelay: index + 's'
    }
  }

  useEffect(() => {
    fetchPostCards()
  }, [fetchPostCards])


  return (

    <div className="homepage pageContainer max-width-big-desktop">
      <div className="homepage__img" />
      <h1 className="title">最新貼文</h1>
      <div className="homepage__post">
        <div className="homepage__post--cards">
          {
            isLoading ?
              <Spinner /> :
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
    postCards: state.postCard.cards,
    isLoading: state.postCard.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostCards: () => {
      dispatch(fetchPostCardsStart())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);