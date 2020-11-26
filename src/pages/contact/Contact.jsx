import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getWishCard } from '../../redux/wishCard/wishCard.action'

import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

import WishCard from '../../components/wishCard/WishCard'
import WishForm from '../../components/wishFrom/WishForm'
import SocialLink from '../../components/socialLink/SocialLink'

import './contact.style.scss'

function Contact({ wishCards, getWishCard }) {

  useEffect(() => {
    getWishCard()
  }, [getWishCard])

  return (
    <div className="contact pageContainer">
      <h1 className="title">聯絡我們</h1>
      <div className="contact__wish">
        <h2 className="title-2">許願池</h2>
        <div className="contact__wishContent">
          <img src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="WishCards background" className="contact__wishContent--background" />
          <div className="contact__wishCardsContainer">
            <div className="contact__wishCards max-width-big-desktop">
              {
                wishCards.map((wishCard) => {
                  return <WishCard key={wishCard.id} wishCard={wishCard} />
                })
              }
            </div>
          </div>
        </div>

        <div className="contact__wishForms max-width-big-desktop">
          <WishForm />
        </div>
      </div>

      <div className="contact__socialMedia max-width-big-desktop">
        <h2 className="title-2">合作邀約</h2>
        <p className="contact__content">
          有任何問題、合作活動邀約歡迎來信或私訊ig<br />
          信箱：fireguns0903@gmaiil.com
        </p>
        <ul className="contact__links">
          <SocialLink mediaName="FB" account="HighQman" website="https://www.facebook.com/HighQman" icon={FaFacebookF} />
          <SocialLink mediaName="IG" account="HighQ_ig" website="https://www.instagram.com/highq_ig/" icon={FaInstagram} />
          <SocialLink mediaName="Tiktok" account="highq0903" website="https://www.tiktok.com/@highq0903?lang=en" icon={SiTiktok} />
          <SocialLink mediaName="抖音" account="highQ776" website="https://www.facebook.com/HighQman" icon={SiTiktok} />
          <SocialLink mediaName="YouTube" account="聽HighQ說幹畫" website="https://www.youtube.com/channel/UCimb03Z3R6F4nYJNAVOArGA/featured" icon={FaYoutube} />
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishCards: state.wishCard.wishCards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWishCard: () => {
      dispatch(getWishCard())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);