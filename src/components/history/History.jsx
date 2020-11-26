import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import HistoryWrap from '../../components/histroyWrap/HistoryWrap'
import { getHistory } from '../../redux/history/history.action';


function History({histories, getHistory}) {

  useEffect(() => {
    getHistory()
  }, [getHistory])

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

const mapStateToProps = (state) => {
  return {
    histories: state.history.histories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHistory: () => {
      dispatch(getHistory())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);