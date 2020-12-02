import React from 'react';
import { Link } from 'react-router-dom'
import { RiAddBoxLine } from 'react-icons/ri';

import CustomButton from '../custom-button/CustomButton.jsx'

import './adminPageTitle.style.scss'

function AdminPageTitle({ title, addBottom, link, notShowAddButton }) {
  return (
    <div className="adminPageTitle admin-margin">
      <h1>{title}</h1>
      {
        notShowAddButton ?
          ''
          :
          <Link to={link}>
            <CustomButton isAdminButton>
              <RiAddBoxLine />
              {addBottom}
            </CustomButton>
          </Link>
      }
    </div>
  );
}

export default AdminPageTitle;