import React from 'react';

import HistoryWrap from '../../components/histroyWrap/HistoryWrap'

import histories from './dummyHistory'

function History(props) {
  return (
    <div className="history">
      {
        histories.map((history) => {
          return <HistoryWrap key={history.id} history={history} />
        })
      }
    </div>
  );
}

export default History;