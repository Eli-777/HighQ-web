import React from 'react';

import HistoryInner from '../historyInner/HistoryInner'

import './historyWrap.style.scss'


function HistoryWrap({ history }) {
  return (
    <div className="history__wrap">
      <div className="history__year">
        <h1>{history.year}  <span className="history__tick">&#187;</span> </h1>
      </div>

      {
        history.inner.map((inner) => {
          return <HistoryInner key={inner.month} inner={inner} />
        })
      }



    </div>
  );
}

export default HistoryWrap;