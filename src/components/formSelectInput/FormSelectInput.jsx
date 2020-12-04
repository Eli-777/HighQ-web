import React from 'react';

function FormSelectInput({ name, id, value, children, ...otherProps }) {
  return (
    <div className="formSelectInput form__group input">
      <label htmlFor={id} className="form__label">{name}</label>
      <div className="select-wrapper">
        <select name={id} id={id} className="form__input" value={value} required {...otherProps}>
          <option value="default" disabled >請選擇{name}</option>
          {children}
        </select>
      </div>
    </div>
  );
}

export default FormSelectInput;