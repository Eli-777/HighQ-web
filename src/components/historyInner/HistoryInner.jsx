import React from 'react';

import HistoryLeft from '../historyLeft/HistoryLeft'

import './historyInner.style.scss'


function HistoryInner({ inner }) {
  return (
    <div className="history__inner">
      <p className="history__month">{inner.month}月</p>
      <div className="history__leftParts">
        {
          inner.left.map((leftItem) => {
            return <HistoryLeft key={leftItem.id} leftItem={leftItem} />
          })
        }
      </div>

    </div>
  );
}

export default HistoryInner;