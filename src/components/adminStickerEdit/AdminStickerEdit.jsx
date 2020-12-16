import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleStickerStart } from '../../redux/sticker/sticker.action'

import AdminStickerAddPage from '../adminStickerAdd/AdminStickerAdd'
import Spinner from '../spinner/spinner.component'

function AdminStickerEdit(props) {

  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedSticker = useSelector(state => state.sticker.selectedSticker)

  useEffect(() => {
    dispatch(getSingleStickerStart(id))
  }, [id, dispatch])

  return (
    <div>
      {
        !selectedSticker ?
          <Spinner />
          :
          <AdminStickerAddPage selectedSticker={selectedSticker} title="編輯貼圖" submitButton="儲存" edit />
      }
    </div>
  );
}

export default AdminStickerEdit;