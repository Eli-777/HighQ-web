import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchWishCardStart } from '../../redux/wishCard/wishCard.action'

import AdminPageTitle from '../../components/adminPageTitle/AdminPageTitle'
import AdminTable from '../../components/adminTable/AdminTable'
import AdminTableItem from '../../components/adminTableItem/AdminTableItem'
import Spinner from '../../components/spinner/spinner.component'

function AdminWishCard(props) {

  const wishCards = useSelector((state) => state.wishCard.wishCards)
  const isLoading = useSelector((state) => state.wishCard.isLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWishCardStart())
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
      <AdminPageTitle title="管理許願池" notShowAddButton />
      {
        isLoading ?
          <Spinner /> :
          <AdminTable tableTitles={tableTitles}>
            {
              wishCards.map((wishCard, index) => {
                return <AdminTableItem key={wishCard.id} tableTitles={tableTitles} td1={index + 1} td2={wishCard.name} td3={wishCard.text} td4={wishCard.createTime} isWishCard id={wishCard.id} page="wishCard" />
              })
            }
          </AdminTable>
      }
    </div>
  );
}

export default AdminWishCard;