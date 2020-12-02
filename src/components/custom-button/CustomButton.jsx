import React from 'react';

import './customButton.style.scss'

function CustomButton({ children, notFound, isFormButton, isAdminButton, ...otherProps }) {
  return (
    <button className=
      {`
        ${notFound ? 'notFound' : ''} 
        ${isFormButton ? 'isFormButton' : ''} 
        ${isAdminButton ? 'isAdminButton' : ''}
        custom-button
      `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;