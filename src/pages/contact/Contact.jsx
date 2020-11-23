import React, { useState } from 'react';

import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

import WishCard from '../../components/wishCard/WishCard'
import WishForm from '../../components/wishFrom/WishForm'
import SocialLink from '../../components/socialLink/SocialLink'

import './contact.style.scss'
import DummyData from './contact.dummyData'

function Contact(props) {
  const [form, setForm] = useState({ name: '', email: '', isPublic: 'true', text: '', createTime: '' })
  const [cards, setCards] = useState(DummyData)

  async function handleSubmit(event) {
    try {
      event.preventDefault()
      const time = new Date()
      const stringTime = time.toDateString()
      setForm({ createTime: '5' })
      console.log(stringTime)

      setCards([{ ...form, id: 'wish000' + (cards.length + 1), createTime: stringTime }, ...cards])
      setForm({ name: '', email: '', isPublic: 'true', text: '', createTime: '' })
      console.log(cards)

    } catch (error) {
      console.log(error)
    }
  }



  function handleChange(event) {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }
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
                cards.map((data) => {
                  return <WishCard key={data.id} data={data} />
                })
              }
            </div>
          </div>
        </div>

        <div className="contact__wishForms max-width-big-desktop">
          <WishForm handleChange={handleChange} handleSubmit={handleSubmit} form={form} />
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

export default Contact;