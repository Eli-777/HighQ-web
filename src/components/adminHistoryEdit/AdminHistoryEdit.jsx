import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleHistory } from '../../redux/history/history.action'

import AdminHistoryAddPage from '../adminHistoryAdd/AdminHistoryAdd'

function AdminHistoryEdit(props) {

  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedHistory = useSelector(state => state.history.selectedHistory)

  useEffect(() => {
    dispatch(getSingleHistory(id))
  }, [id, dispatch])

  return (
    <div>
      <AdminHistoryAddPage selectedHistory={selectedHistory} title="編輯歷史" submitButton="儲存" edit/>
    </div>
  );
}

export default AdminHistoryEdit;