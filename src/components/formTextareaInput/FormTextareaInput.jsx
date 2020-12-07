import React from 'react';

function FormTextareaInput({ name, id, value, children, ...otherProps }) {
  return (
    <div className="formTextareaInput form__group input">
      <label htmlFor={id} className="form__label">{name}</label>
      <div className="Textarea-wrapper">
        <textarea name={id} id={id} className="form__textarea" rows="5" value={value} required {...otherProps}>
          {children}
        </textarea>
      </div>
    </div>
  );
}

export default FormTextareaInput;