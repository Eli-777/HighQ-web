import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addCharacterStart, editCharacterStart } from '../../redux/character/character.action'
import { useHistory } from 'react-router-dom'

import FormGroupInput from '../formGroupInput/FormGroupInput'
import FormTextareaInput from '../formTextareaInput/FormTextareaInput'
import AdminCustomButton from '../adminCustomButton/AdminCustomButton'

import { NoInput, saveWarning } from '../../effects/sweetAlert2.effects'


function AdminCharacterAdd({ selectedCharacter, title, submitButton, edit }) {
  const [form, setForm] = useState({ name: '', characterImg: '', intro: { intro1: '', intro2: '' } })
  const [previewImage, setPreviewImage] = useState()
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (selectedCharacter) {
      setForm(selectedCharacter)
    }
  }, [selectedCharacter])

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name) {
      NoInput('角色名稱')
      return
    } else if (!form.characterImg) {
      NoInput('角色圖片')
      return
    }
    else if (!form.intro) {
      NoInput('角色介紹')
      return
    }

    if (!edit) {
      dispatch(addCharacterStart({ form, setForm }))
    } else {
      saveWarning().then((result) => {
        if (result.isConfirmed) {
          dispatch(editCharacterStart({ form, history }))
        }
      })

    }
  }

  function handleChange(event) {
    const { value, name, files } = event.target
    setForm({ ...form, [name]: value })
    if (files) {
      let previewImageURL = window.URL.createObjectURL(files[0])
      setPreviewImage(previewImageURL)
      let image = files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        setForm({ ...form, characterImg: e.target.result })
      }
      reader.readAsDataURL(image)
    }
    if (name === "intro1" || name === "intro2") {
      setForm({ ...form, intro: { ...form.intro, [name]: value } })
    }
  }

  return (
    <div className="adminAdd__page pageContainer max-width-big-desktop">
      <form className="adminAdd__form" onSubmit={handleSubmit}>
        <h1 className="adminAdd__title">{title}</h1>
        <FormGroupInput name="角色名稱" id="name" value={form.name} onChange={handleChange} />
        <div className="adminAdd__input-image">
          <FormGroupInput type="file" accept="image/*" name="角色圖片" id="photo" image onChange={handleChange} />
          {
            form.characterImg ?
              <img
                src={previewImage ? previewImage : form.characterImg}
                className="adminAdd__preview-image"
                alt="preview"
              /> : null
          }
        </div>
        <FormTextareaInput name="角色介紹1" id="intro1" value={form.intro && form.intro.intro1 ? form.intro.intro1 : ''} onChange={handleChange} />
        <FormTextareaInput name="角色介紹2" id="intro2" value={form.intro && form.intro.intro2 ? form.intro.intro2 : ''} onChange={handleChange} />

        <AdminCustomButton edit={submitButton} />

      </form>
    </div>
  );
}

export default AdminCharacterAdd;