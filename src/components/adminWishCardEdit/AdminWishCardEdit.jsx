import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleWishCardStart } from '../../redux/wishCard/wishCard.action'

import AdminWishCardAddPage from '../adminWishCardAdd/AdminWishCardAdd'
import Spinner from '../spinner/spinner.component'

function AdminStickerEdit(props) {

  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedWishCard = useSelector(state => state.wishCard.selectedWishCard)

  useEffect(() => {
    dispatch(getSingleWishCardStart(id))
  }, [id, dispatch])

  return (
    <div>
      {
        !selectedWishCard ?
          <Spinner /> 
          :
          <AdminWishCardAddPage selectedWishCard={selectedWishCard} title="編輯許願池" submitButton="儲存" edit />
      }
    </div>
  );
}

export default AdminStickerEdit;