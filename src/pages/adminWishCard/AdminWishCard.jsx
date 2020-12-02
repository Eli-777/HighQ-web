import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getWishCard } from '../../redux/wishCard/wishCard.action'

import AdminPageTitle from '../../components/adminPageTitle/AdminPageTitle'
import AdminTable from '../../components/adminTable/AdminTable'
import AdminTableItem from '../../components/adminTableItem/AdminTableItem'

function AdminWishCard(props) {

  const wishCards = useSelector((state) => state.wishCard.wishCards)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWishCard())
  }, [dispatch])

  const tableTitles = [
    '序列',
    '名稱',
    '留言',
    '留言時間',
    '管理'
  ]

  return (
    <div className="pageContainer max-width-big-desktop">
      <AdminPageTitle title="管理許願池"  notShowAddButton/>
      <AdminTable tableTitles={tableTitles}>
        {
          wishCards.map((wishCard, index) => {
            return <AdminTableItem key={wishCard.id} tableTitles={tableTitles} td1={index + 1} td2={wishCard.name} td3={wishCard.text} td4={wishCard.createTime} isWishCard />
          })
        }
      </AdminTable>
    </div>
  );
}

export default AdminWishCard;