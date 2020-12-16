import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSinglePostCardStart } from '../../redux/postCard/postCard.action'

import AdminAddPage from '../adminMainAdd/AdminMainAdd'
import Spinner from '../spinner/spinner.component'

function AdminMainEdit(props) {

  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedPostCard = useSelector(state => state.postCard.selectedCard)

  useEffect(() => {
    dispatch(getSinglePostCardStart(id))
  }, [id, dispatch])

  return (
    <div>
      {
        !selectedPostCard ?
          <Spinner />
          :
          <AdminAddPage selectedPostCard={selectedPostCard} title="編輯貼文" submitButton="儲存" edit />
      }
    </div>
  );
}

export default AdminMainEdit;