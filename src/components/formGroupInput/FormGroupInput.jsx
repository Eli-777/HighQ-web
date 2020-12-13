import React from 'react';

function FormGroupInput({ name, id, value, onChange, ...otherProps }) {

  return (
    <div className="formGroupInput">
      <div className="form__group input">
        <label htmlFor={id} className="form__label">{name}</label>
        <input id={id}  className="form__input"  name={id} value={value || ''} onChange={onChange} {...otherProps}/>
      </div>
    </div>
  );
}

export default FormGroupInput;