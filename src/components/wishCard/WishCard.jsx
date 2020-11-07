import React from 'react';

import './wishCard.style.scss'

function WishCard({ data }) {
  return (
    <div className="wishCard">
      <h3 className="wishCard__id">ID：{data.isPublic === 'true' ? data.name : '***'}</h3>

      <p className="wishCard__content">
        {data.text}
      </p>
      <div className="wishCard__date">時間：{data.createTime}</div>
    </div>
  );
}

export default WishCard;