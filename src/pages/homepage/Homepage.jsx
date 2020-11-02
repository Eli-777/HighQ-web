import React from 'react';

import PostCard from '../../components/postCard/PostCard'

import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import './homepage.style.scss'
// import homeImg from '../../assets/home-page-long-image.jpg'

function Homepage(props) {
  const postImg = ["https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/122028545_4550235388381455_8025810323506480456_o.jpg?_nc_cat=101&ccb=2&_nc_sid=9267fe&_nc_ohc=i9uU0NGHB0cAX97MC_Q&_nc_ht=scontent.ftpe7-4.fna&oh=0309a03fc9ec98b0f52b4c6bcddc0718&oe=5FB7E4B6", "https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.0-9/s720x720/122108722_4541024049302589_1077783461789502700_o.jpg?_nc_cat=111&ccb=2&_nc_sid=9267fe&_nc_ohc=Fd9vR0gYSxsAX963vn4&_nc_ht=scontent.ftpe7-3.fna&tp=7&oh=2a042c5b3667da87db6d0147921ae65a&oe=5FB919D5", "https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/p843x403/121482151_4533918766679784_1477410593858017263_o.jpg?_nc_cat=105&ccb=2&_nc_sid=9267fe&_nc_ohc=Yz9qUtSs4hcAX_KHZx2&_nc_ht=scontent.ftpe7-4.fna&tp=6&oh=87ab3989ef9d9681f606f3b5ed8a11d1&oe=5FB7EBD1"]

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
    
    <div className="homepage pageContainer">
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