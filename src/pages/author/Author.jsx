import React from 'react';

import authorImg from  '../../assets/author.svg'
import History from '../../components/history/History'
import './author.style.scss'

function Author(props) {
  return (
    <div className="author">
      <h1 className="title">作者介紹</h1>
      <div className="author__intro">
        <img src={authorImg} alt="Author pic" className="author__img" />
        <p className="author__intro--phrase">
          許多人問我為甚麼要取HighQ，<br/>呵 因為老子喜歡 (大誤) <br/>其實是我喜歡我的作品都是又嗨又 cute 的東西，<br/>所以常畫些誇張的表情配上喜憨的動作，<br/>再結合一些時事，<br/>做一些白爛風格的梗圖，<br/>希望透過這些簡單就能令人發笑的圖，<br/>讓大家在紛擾的世界裡能釋放心情，<br/>將生活中的酸苦化作你我的共鳴。
        </p>
      </div>

      <h1 className="title">歷史沿革</h1>
      <History />
    </div>
  );
}

export default Author;