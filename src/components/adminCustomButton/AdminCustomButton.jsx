import React from 'react';
import { useHistory } from "react-router-dom";

import CustomButton from '../../components/custom-button/CustomButton.jsx'

import './adminCustomButton.style.scss'

function AdminCustomButton({ edit }) {

  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <div className="adminAdd__button">
      <CustomButton isFormButton >
        {edit}
      </CustomButton>
      <CustomButton isFormCancelButton type="button" onClick={handleClick}>
        取消
      </CustomButton>
    </div>
  );
}

export default AdminCustomButton;