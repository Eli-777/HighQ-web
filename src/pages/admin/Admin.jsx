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
    '序列',
    '來源',
    '發布時間',
    '縮圖',
    '管理'
  ]

  return (
    <div className="pageContainer max-width-big-desktop">
      <AdminPageTitle title="管理貼文" addBottom="新增貼文" link="/admin/main/add" />
      <AdminTable tableTitles={tableTitles}>
        {
          postCards.map((postCard, index) => {
            return <AdminTableItem key={postCard.id} tableTitles={tableTitles} td1={index + 1} td2={postCard.media} td3={postCard.date} td4={postCard.photo} id={postCard.id} page="main" />
          })
        }
      </AdminTable>
    </div>
  );
}

export default Admin;