import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import HistoryWrap from '../../components/histroyWrap/HistoryWrap'
import { fetchHistoryStart } from '../../redux/history/history.action';
import Spinner from '../spinner/spinner.component'


function History({ histories, fetchHistoryStart,isLoading }) {

  useEffect(() => {
    fetchHistoryStart()
  }, [fetchHistoryStart])


  return (
    <div className="history">
      {
        isLoading ?
        <Spinner /> :
        histories.map((history, index) => {
          return <HistoryWrap key={index} history={history} />
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    histories: state.history.histories,
    isLoading: state.history.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHistoryStart: () => {
      dispatch(fetchHistoryStart())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);