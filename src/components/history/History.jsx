import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import HistoryWrap from '../../components/histroyWrap/HistoryWrap'
import { getHistory } from '../../redux/history/history.action';


function History({ histories, getHistory }) {

  useEffect(() => {
    getHistory()
  }, [getHistory])

  function selectDate(history, date) {
    let historyDate = history.date.split('-')
    let yearOrMonth = historyDate[date]
    return yearOrMonth
  }

  function yearFilter(histories) {
    let year = {}
    let yearArray = []
    histories.forEach((history) => {
      let historyYear = selectDate(history, 0)
      let historyMonth = selectDate(history, 1)
      if (!year[historyYear]) {
        year[historyYear] = {}
      }
      if (!year[historyYear][historyMonth]) {
        year[historyYear][historyMonth] = []
      }
      year[historyYear][historyMonth].push(history)

    })

    for (const [key, value] of Object.entries(year)) {
      yearArray.push({
        "year": key,
        "inner": value
      })
    }

    let sortedHistories = yearArray.map((item) => {
      let month = []
      for (const [key, value] of Object.entries(item.inner)) {
        month.push({
          "month": key,
          "left": value
        })
      }

      month.sort((a, b) => a.month - b.month)
      item.inner = month
      return item
    })

    return sortedHistories
  }


  return (
    <div className="history">
      {
        yearFilter(histories).map((history, index) => {
          return <HistoryWrap key={index} history={history} />
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