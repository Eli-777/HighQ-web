import React from 'react';



import './postCard.style.scss'

function PostCard({ media, mediaIcon, photo, date, style }) {
  return (
    <div className={`card `} style={style}>
      <div className={`card__header ${media}`}>
        {mediaIcon}
        <div className="card__date">{date}</div>
      </div>

      <img src={photo} alt="Post" className="card__photo" />
    </div>
  );
}

export default PostCard;