import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleSticker } from '../../redux/sticker/sticker.action'

import AdminStickerAddPage from '../adminStickerAdd/AdminStickerAdd'

function AdminStickerEdit(props) {

  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedSticker = useSelector(state => state.sticker.selectedSticker)

  useEffect(() => {
    dispatch(getSingleSticker(id))
  }, [id, dispatch])

  return (
    <div>
      <AdminStickerAddPage selectedSticker={selectedSticker} title="編輯貼圖" submitButton="儲存" edit/>
    </div>
  );
}

export default AdminStickerEdit;