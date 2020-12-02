import React from 'react';

import CustomButton from '../custom-button/CustomButton'
import { MdEdit, MdDelete } from 'react-icons/md'

import './adminTableItem.style.scss'

function AdminTableItem({ tableTitles, postCard }) {
  const {id, media, photo, date} = postCard
  return (
    <tr>
      <td data-title={tableTitles[0]}>{id}</td>
      <td data-title={tableTitles[1]}>{media}</td>
      <td data-title={tableTitles[2]}>
        <div className="table__img">
          <img src={photo} alt="" className="table__img" />
        </div>

      </td>
  <td data-title={tableTitles[3]}>{date}</td>
      <td data-title={tableTitles[4]}>
        <div className="table__icon">
          <CustomButton isAdminButton><MdEdit /></CustomButton>
          <CustomButton isAdminButton><MdDelete /></CustomButton>
        </div>
      </td>
    </tr>
  );
}

export default AdminTableItem;