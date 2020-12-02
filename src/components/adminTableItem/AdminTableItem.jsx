import React from 'react';

import CustomButton from '../custom-button/CustomButton'
import { MdEdit, MdDelete } from 'react-icons/md'

import './adminTableItem.style.scss'

function AdminTableItem({ tableTitles, td1, td2, td3, td4, isWishCard }) {

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
          <CustomButton isAdminButton><MdEdit /></CustomButton>
          <CustomButton isAdminButton><MdDelete /></CustomButton>
        </div>
      </td>
    </tr>
  );
}

export default AdminTableItem;