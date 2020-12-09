import React from 'react';

import './formLoginInput.style.scss'

function FormLoginInput({ onChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form__input" onChange={onChange} {...otherProps} />
      {
        label ?
          <label className={`${otherProps.value.length ? 'shrink' : ''} form__input--label`}>
            {label}
          </label>
          :
          null
      }
    </div>
  );
}

export default FormLoginInput;