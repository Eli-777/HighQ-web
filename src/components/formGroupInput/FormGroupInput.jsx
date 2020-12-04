import React from 'react';

function FormGroupInput({ name, id, value, type, onChange }) {

  return (
    <div className="formGroupInput">
      <div className="form__group input">
        <label htmlFor={id} className="form__label">{name}</label>
        <input id={id} type={type} className="form__input" value={value || ""} name={id} onChange={onChange} required />
      </div>
    </div>
  );
}

export default FormGroupInput;