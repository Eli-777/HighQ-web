import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCharacterStart } from '../../redux/character/character.action'

import AdminCharacterAddPage from '../adminCharacterAdd/AdminCharacterAdd'

function AdminMainEdit(props) {

  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedCharacter = useSelector(state => state.character.selectedCharacter)

  useEffect(() => {
    dispatch(getSingleCharacterStart(id))
  }, [id, dispatch])

  return (
    <div>
      <AdminCharacterAddPage selectedCharacter={selectedCharacter} title="編輯角色" submitButton="儲存" edit/>
    </div>
  );
}

export default AdminMainEdit;