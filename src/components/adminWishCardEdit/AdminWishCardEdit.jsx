import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleWishCard } from '../../redux/wishCard/wishCard.action'

import AdminWishCardAddPage from '../adminWishCardAdd/AdminWishCardAdd'

function AdminStickerEdit(props) {

  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedWishCard = useSelector(state => state.wishCard.selectedWishCard)

  useEffect(() => {
    dispatch(getSingleWishCard(id))
  }, [id, dispatch])

  return (
    <div>
      <AdminWishCardAddPage selectedWishCard={selectedWishCard} title="編輯許願池" submitButton="儲存" edit/>
    </div>
  );
}

export default AdminStickerEdit;