import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { editWishCardStart } from '../../redux/wishCard/wishCard.action'
import { useHistory } from 'react-router-dom'

import FormGroupInput from '../formGroupInput/FormGroupInput'
import FormSelectInput from '../formSelectInput/FormSelectInput'
import FormTextareaInput from '../formTextareaInput/FormTextareaInput'
import AdminCustomButton from '../adminCustomButton/AdminCustomButton'

import { NoInput, saveWarning, blankWarning } from '../../effects/sweetAlert2.effects'


function AdminWishCardAdd({ selectedWishCard, title, submitButton }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    isPublic: '',
    text: ''
  })
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (selectedWishCard) {
      setForm(selectedWishCard)
    }
  }, [selectedWishCard])

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name) {
      NoInput('名稱')
      return
    } else if (!form.text) {
      NoInput('留言')
      return
    }
    else if (!form.isPublic) {
      NoInput('是否公開')
      return
    } else if (form.text.trim() === '') {
      blankWarning()
      return
    }


    saveWarning().then((result) => {
      if (result.isConfirmed) {
        dispatch(editWishCardStart({ form, history }))
      }
    })

  }

  function handleChange(event) {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className="adminAdd__page pageContainer max-width-big-desktop">
      <form className="adminAdd__form" onSubmit={handleSubmit}>
        <h1 className="adminAdd__title">{title}</h1>
        <FormSelectInput name="是否公開" id="isPublic" value={form.isPublic} onChange={handleChange} >
          <option value="true">公開</option>
          <option value="false">匿名</option>
        </FormSelectInput>
        <FormGroupInput name="名稱" id="name" value={form.name} onChange={handleChange} />
        <FormGroupInput name="信箱" id="email" type="email" value={form.email} onChange={handleChange} />
        <FormTextareaInput name="留言" id="text" value={form.text} onChange={handleChange} />

        <AdminCustomButton edit={submitButton} />

      </form>
    </div>
  );
}

export default AdminWishCardAdd;