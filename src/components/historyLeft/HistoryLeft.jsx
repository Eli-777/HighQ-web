import React, { useEffect } from 'react';

import './historyLeft.style.scss'

import AOS from 'aos';
import "aos/dist/aos.css";


function HistoryLeft({ leftItem }) {
  const { desc, img, type } = leftItem

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className={`${type} history__left`}  >
      <dl>
        <dt>
          <p className="history__desc" data-aos="fade-left">
            {desc}
          </p>
        </dt>
        <dd>
          <div className="history__img" data-aos="fade-left" data-aos-delay="500">
            {
              img ? <img src={img} alt="Sticker img" />
                : ''
            }
          </div>
        </dd>
      </dl>
    </div>
  );
}

export default HistoryLeft;