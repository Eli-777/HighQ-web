import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addSticker, editSticker } from '../../redux/sticker/sticker.action'
import { useHistory } from 'react-router-dom'

import FromGroupInput from '../formGroupInput/FormGroupInput'
import FromSelectInput from '../formSelectInput/FormSelectInput'
import FormTextareaInput from '../formTextareaInput/FormTextareaInput'
import AdminCustomButton from '../adminCustomButton/AdminCustomButton'

import { NoInput, addSuccess, saveWarning } from '../../effects/sweetAlert2.effects'


function AdminStickerAdd({ selectedSticker, title, submitButton, edit }) {
  const [form, setForm] = useState({
    type: 'default',
    name: '',
    price: '',
    image: { single: '', together: '' },
    link: '',
    description: ''
  })
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (selectedSticker) {
      setForm(selectedSticker)
    }
  }, [selectedSticker])

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name) {
      NoInput('貼圖名稱')
      return
    } else if (!form.price) {
      NoInput('價格')
      return
    }
    else if (!form.image.single) {
      NoInput('單張貼圖圖片')
      return
    }
    else if (!form.image.together) {
      NoInput('全部貼圖圖片')
      return
    }
    else if (!form.link) {
      NoInput('購買連結')
      return
    }
    else if (!form.description) {
      NoInput('描述')
      return
    }

    if (!edit) {
      dispatch(addSticker(form))
      addSuccess('新增')
      setForm({
        type: 'default',
        name: '',
        price: '',
        image: { single: '', together: '' },
        link: '',
        description: ''
      })
    } else {
      saveWarning().then((result) => {
        if (result.isConfirmed) {
          dispatch(editSticker(form))
          addSuccess('編輯').then(() => {
            history.goBack()
          })
        }
      })

    }
  }

  function handleChange(event) {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
    if (name === "single" || name === "together") {
      setForm({ ...form, image: { ...form.image, [name]: value } })
    }
  }

  return (
    <div className="adminAdd__page pageContainer max-width-big-desktop">
      <form className="adminAdd__form" onSubmit={handleSubmit}>
        <h1 className="adminAdd__title">{title}</h1>
        <FromSelectInput name="類型" id="type" value={form.type} onChange={handleChange} >
          <option value="sticker">貼圖</option>
          <option value="emoji">表情貼</option>
          <option value="theme">主題</option>
        </FromSelectInput>
        <FromGroupInput name="名稱" id="name" value={form.name} onChange={handleChange} />
        <FromGroupInput name="價格" id="price" value={form.price} onChange={handleChange} />
        <FromGroupInput name="單張貼圖" id="single" value={form.image && form.image.single ? form.image.single : ''} onChange={handleChange} />
        <FromGroupInput name="全部貼圖" id="together" value={form.image && form.image.together ? form.image.together : ''} onChange={handleChange} />
        <FromGroupInput name="購買連結" id="link" value={form.link} onChange={handleChange} />
        <FormTextareaInput name="描述" id="description" value={form.description} onChange={handleChange} />

        <AdminCustomButton edit={submitButton} />

      </form>
    </div>
  );
}

export default AdminStickerAdd;