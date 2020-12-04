import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSinglePostCards } from '../../redux/postCard/postCard.action'

import AdminAddPage from '../adminMainAdd/AdminMainAdd'

function AdminMainEdit(props) {

  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedPostCard = useSelector(state => state.postCard.selectedCard)

  useEffect(() => {
    dispatch(getSinglePostCards(id))
  }, [id, dispatch])

  return (
    <div>
      <AdminAddPage selectedPostCard={selectedPostCard} title="編輯貼文" submitButton="儲存" edit/>
    </div>
  );
}

export default AdminMainEdit;