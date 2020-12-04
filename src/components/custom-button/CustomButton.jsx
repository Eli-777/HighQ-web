import React from 'react';

import './customButton.style.scss'

function CustomButton({ children, notFound, isFormButton, isAdminButton, isFormCancelButton, ...otherProps }) {
  return (
    <button className=
      {`
        ${notFound ? 'notFound' : ''} 
        ${isFormButton ? 'isFormButton' : ''} 
        ${isAdminButton ? 'isAdminButton' : ''}
        ${isFormCancelButton ? 'isFormCancelButton' : ''}
        custom-button
      `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;