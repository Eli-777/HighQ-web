import React from 'react';

function FormGroupInput({ name, id, value, onChange, image, ...otherProps }) {

  return (
    <div className="formGroupInput">
      <div className="form__group input">
        <label htmlFor={id} className="form__label">{name}</label>
        <input id={id} className={`form__input ${image ? 'form__input-image' : null} `} name={id} value={value || ''} onChange={onChange} {...otherProps} />
      </div>
    </div>
  );
}

export default FormGroupInput;