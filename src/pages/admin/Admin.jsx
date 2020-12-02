import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPostCards } from '../../redux/postCard/postCard.action.js'

import AdminPageTitle from '../../components/adminPageTitle/AdminPageTitle'
import AdminTable from '../../components/adminTable/AdminTable'
import AdminTableItem from '../../components/adminTableItem/AdminTableItem'

function Admin(props) {

  const postCards = useSelector((state) => state.postCard.cards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostCards())
  }, [dispatch])

  const tableTitles = [
    'ID',
    '來源',
    '縮圖',
    '發布時間',
    '管理'
  ]

  return (
    <div className="pageContainer max-width-big-desktop">
      <AdminPageTitle title="管理貼文" addBottom="新增貼文" link="/admin/main/add" />
      <AdminTable tableTitles={tableTitles}>
        {
          postCards.map((postCard) => {
            return <AdminTableItem key={postCard.id} tableTitles={tableTitles} postCard={postCard} />
          })
        }
      </AdminTable>
    </div>
  );
}

export default Admin;