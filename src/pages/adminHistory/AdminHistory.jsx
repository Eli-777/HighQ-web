import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getHistoryStart } from '../../redux/history/history.action'

import AdminPageTitle from '../../components/adminPageTitle/AdminPageTitle'
import AdminTable from '../../components/adminTable/AdminTable'
import AdminTableItem from '../../components/adminTableItem/AdminTableItem'
import Spinner from '../../components/spinner/spinner.component'

function AdminHistory(props) {

  const histories = useSelector((state) => state.history.histories)
  const isLoading = useSelector((state) => state.history.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHistoryStart())
  }, [dispatch])

  const tableTitles = [
    '時間',
    '事件類型',
    '事件名稱',
    '縮圖',
    '管理'
  ]

  return (
    <div className="pageContainer max-width-big-desktop">
      <AdminPageTitle title="管理歷史" addBottom="新增歷史" link="/admin/history/add" />
      {
        isLoading ?
          <Spinner /> :
          <AdminTable tableTitles={tableTitles}>
            {
              histories.map((history) => {
                let type = history.type === 'product' ? "產品" : "事件"

                return <AdminTableItem key={history.id} tableTitles={tableTitles} td1={history.date} td2={type} td3={history.desc} td4={history.img} id={history.id} page="history" />
              })
            }
          </AdminTable>
      }
    </div>
  );
}

export default AdminHistory;