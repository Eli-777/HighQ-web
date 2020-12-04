import React from 'react';
import { useDispatch } from 'react-redux'
import { deletePostCard } from '../../redux/postCard/postCard.action'
import { useHistory } from 'react-router-dom'

import CustomButton from '../custom-button/CustomButton'
import { MdEdit, MdDelete } from 'react-icons/md'

import { deleteWarning } from '../../effects/sweetAlert2.effects'

import './adminTableItem.style.scss'

function AdminTableItem({ tableTitles, td1, td2, td3, td4, isWishCard, id }) {
  const dispatch = useDispatch()
  const history = useHistory()

  function handleDeleteClick(id) {
    deleteWarning().then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePostCard(id))
      }
    })
  }

  function handleEditClick(id) {
    history.push(`/admin/main/edit/${id}`)
  }

  return (
    <tr>
      <td data-title={tableTitles[0]}>{td1}</td>
      <td data-title={tableTitles[1]}>{td2}</td>
      <td data-title={tableTitles[2]}>{td3}</td>
      <td data-title={tableTitles[3]}>
        {
          isWishCard ?
            td4
            :
            <div className="table__img">
              <img src={td4} alt="" className="table__img" />
            </div>
        }

      </td>

      <td data-title={tableTitles[4]}>
        <div className="table__icon">
          <CustomButton isAdminButton onClick={() => handleEditClick(id)}><MdEdit /></CustomButton>
          <CustomButton isAdminButton onClick={() => handleDeleteClick(id)}><MdDelete /></CustomButton>
        </div>
      </td>
    </tr>
  );
}

export default AdminTableItem;