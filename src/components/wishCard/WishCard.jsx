import React from 'react';

import './wishCard.style.scss'

function WishCard({ wishCard }) {
  return (
    <div className="wishCard" id={wishCard.id}>
      <h3 className="wishCard__id">ID：{wishCard.isPublic === 'true' ? wishCard.name : '***'}</h3>

      <p className="wishCard__content">
        {wishCard.text}
      </p>
      <div className="wishCard__date">時間：{wishCard.createTime}</div>
    </div>
  );
}

export default WishCard;