import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getHistory } from '../../redux/history/history.action'

import AdminPageTitle from '../../components/adminPageTitle/AdminPageTitle'
import AdminTable from '../../components/adminTable/AdminTable'
import AdminTableItem from '../../components/adminTableItem/AdminTableItem'

function AdminHistory(props) {

  const histories = useSelector((state) => state.history.histories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHistory())
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
      <AdminTable tableTitles={tableTitles}>
        {
          histories.map((years) => {
            return years.inner.map((month) => {
              return month.left.map((event) => {
                return <AdminTableItem key={event.id} tableTitles={tableTitles} td1={event.date} td2={event.type} td3={event.desc} td4={event.img} />
              })
            })
          })
        }
      </AdminTable>
    </div>
  );
}

export default AdminHistory;