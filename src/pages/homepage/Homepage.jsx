import React from 'react';

import PostCard from '../../components/postCard/PostCard'

import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import './homepage.style.scss'


function Homepage(props) {
  const postImg = ["https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.0-9/126038911_4690800110991648_3093960423680730619_o.jpg?_nc_cat=106&ccb=2&_nc_sid=2d5d41&_nc_ohc=g08D3HDgxRQAX-GvUA0&_nc_ht=scontent.ftpe8-3.fna&oh=a10ccdae22e387a0fc7583edf465354f&oe=5FDFDF1D", "https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.0-9/s720x720/122108722_4541024049302589_1077783461789502700_o.jpg?_nc_cat=111&ccb=2&_nc_sid=9267fe&_nc_ohc=Fd9vR0gYSxsAX963vn4&_nc_ht=scontent.ftpe7-3.fna&tp=7&oh=2a042c5b3667da87db6d0147921ae65a&oe=5FB919D5", "https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.0-9/s960x960/125844113_4673300106074982_2578869759710400219_o.jpg?_nc_cat=103&ccb=2&_nc_sid=2d5d41&_nc_ohc=415Ijzmns8cAX9fZSss&_nc_ht=scontent.ftpe8-2.fna&tp=7&oh=342269576dc0f4752db800d4403c2189&oe=5FDEB1EF"]

  const fake = {
    cards: [
      {
        id:1,
        media: 'fb',
        mediaIcon: <FaFacebookF className={`card__icon fb`} />,
        photo: postImg[0],
        date: '2020年10月17日'
      },
      {
        id:2,
        media: 'ig',
        mediaIcon: <FaInstagram className={`card__icon ig`} />,
        photo: postImg[1],
        date: '2020年10月17日'
      },
      {
        id:3,
        media: 'fb',
        mediaIcon: <FaFacebookF className={`card__icon fb`} />,
        photo: postImg[2],
        date: '2020年10月17日'
      }
    ]
  }

  function generateAniDelay(index) {
    return {
      animationDelay: index + 's'
    }
  }


  return (
    
    <div className="homepage pageContainer max-width-big-desktop">
      <div className="homepage__img" />
      <h1 className="title">最新貼文</h1>
      <div className="homepage__post">
        <div className="homepage__post--cards">
          {
            fake.cards.map((card, index)=> {
              return <PostCard key={card.id} media={card.media} mediaIcon={card.mediaIcon} photo={card.photo} date={card.date} style={generateAniDelay(index)} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Homepage;