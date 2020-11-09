import React from 'react';

import './socialLink.style.scss'


function SocialLink({ mediaName, account, website, icon }) {
  const IconImg = icon

  return (
    <li className="contact__link">
      <p>{mediaName}：{account}</p>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <IconImg />
      </a>
    </li>
  );
}

export default SocialLink;