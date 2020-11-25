import React from 'react';

import './customButton.style.scss'

function CustomButton({ children, notFound, isFormButton, ...otherProps }) {
  return (
    <button className={ `${notFound ? 'notFound' : ''} ${isFormButton ? 'isFormButton' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;