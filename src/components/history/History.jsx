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
    // let fetchYear = histories.map((history) => {
    //   let historyYear = selectDate(history, 0)
    //   return historyYear
    // })
    // fetchYear = fetchYear.filter((year, index, arr) => {
    //   return arr.indexOf(year) === index
    // })
    // console.log('fetchYear = ', fetchYear)

    // let filteredYearHistory = fetchYear.map((year)=> {

    //   let yearHistory = histories.filter((history) => {
    //     let historyYear = selectDate(history, 0)
    //     return historyYear === year
    //   })

    //   return [year, [...yearHistory]]
    // })

    // let filteredMonthHistory = filteredYearHistory.map((year) => {
    //   console.log(year, year[1])
    //   let table = {}
    //   year[1].forEach((month) => {
    //     let historyMonth = selectDate(month, 1)
    //     if (!table[historyMonth]) {
    //       table[historyMonth] = []
    //     }
    //     table[historyMonth].push(month)
    //   })

    //   let table2 = []
    //   for (const [key, value] of Object.entries(table)) {
    //     table2.push({
    //       "month": key,
    //       "left": value
    //     })
    //   }
    //   console.log("table", table)

    //   return {"year":year[0], "inner": table2}

    // })

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