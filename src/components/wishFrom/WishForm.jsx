import React from 'react';

import CustomButton from '../custom-button/CustomButton'

import './wishForm.style.scss'

function WishForm({ handleChange, handleSubmit, form }) {

  return (
    <form className="contact__wishForm" onSubmit={handleSubmit}>
      <div className="form__group input">
        <label htmlFor="name" className="form__label">名稱</label>
        <input id="name" type="text" className="form__input" value={form.name} name="name" onChange={handleChange} />
      </div>

      <div className="form__group input">
        <label htmlFor="email" className="form__label">E-mail</label>
        <input id="email" type="text" className="form__input" value={form.email} name="email" onChange={handleChange} />
      </div>

      <div className="form__group radio">
        <div className="form__group--radio">
          <input id="public" type="radio" className="form__input--radio" name="isPublic" value="true" onChange={handleChange} checked={form.isPublic === 'true'} />
          <label htmlFor="public" className="form__label">公開發言</label>
        </div>
        <div className="form__group--radio">
          <input id="private" type="radio" className="form__input--radio" name="isPublic" value="false" onChange={handleChange} checked={form.isPublic === 'false'} />
          <label htmlFor="private" className="form__label">匿名發言</label>
        </div>
      </div>

      <div className="form__group">
        <textarea name="text" rows="5" placeholder="我想許願..." className="form__textarea" value={form.text} onChange={handleChange} />
      </div>

      <div className="form__group">
        <CustomButton isFormButton>送 出 意 見</CustomButton>
      </div>

    </form>
  );
}

export default WishForm;