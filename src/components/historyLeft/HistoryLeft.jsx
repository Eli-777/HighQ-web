import React, { useEffect, useState, useCallback } from 'react';

import './historyLeft.style.scss'

import AOS from 'aos';
import "aos/dist/aos.css";


function HistoryLeft({ leftItem }) {
  const { desc, img, type } = leftItem

  const [aosAttribute, setAosAttribute] = useState('')

  const getAosAttribute = useCallback(
    () => {
      let screen = document.body.clientWidth
      if ((screen > 1200) && (type === 'history')) {
        setAosAttribute("fade-right")
      } else {
        setAosAttribute("fade-left")
      }
    },
    [type]
  )

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    getAosAttribute()
    window.addEventListener('resize', getAosAttribute)
    return (() => {
      window.removeEventListener('resize', getAosAttribute);
    })
  }, [getAosAttribute])

  return (
    <div className={`${type} history__left`}  >
      <dl>
        <dt>
          <p className="history__desc" data-aos={aosAttribute}>
            {desc}
          </p>
        </dt>
        <dd>
          <div className="history__img" data-aos={aosAttribute} data-aos-delay="500">
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