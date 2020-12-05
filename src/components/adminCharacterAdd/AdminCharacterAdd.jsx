import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addCharacter, editCharacter } from '../../redux/character/character.action'
import { useHistory } from 'react-router-dom'

import FromGroupInput from '../formGroupInput/FormGroupInput'
import AdminCustomButton from '../adminCustomButton/AdminCustomButton'

import { NoInput, addSuccess, saveWarning } from '../../effects/sweetAlert2.effects'


function AdminCharacterAdd({ selectedCharacter, title, submitButton, edit }) {
  const [form, setForm] = useState({ name: '', characterImg: '', intro: { intro1: '', intro2: '' } })
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
      dispatch(addCharacter(form))
      addSuccess('新增')
      setForm({ name: '', characterImg: '', intro: '' })
    } else {
      saveWarning().then((result) => {
        if (result.isConfirmed) {
          dispatch(editCharacter(form))
          addSuccess('編輯').then(() => {
            history.push(`/admin/character`)
          })
        }
      })

    }
  }

  function handleChange(event) {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
    if (name === "intro1" || name === "intro2") {
      setForm({ ...form, intro: { ...form.intro, [name]: value } })
    }
  }

  return (
    <div className="adminAdd__page pageContainer max-width-big-desktop">
      <form className="adminAdd__form" onSubmit={handleSubmit}>
        <h1 className="adminAdd__title">{title}</h1>
        <FromGroupInput name="角色名稱" id="name" value={form.name} onChange={handleChange} />
        <FromGroupInput name="角色照片" id="characterImg" value={form.characterImg} onChange={handleChange} />
        <FromGroupInput name="角色介紹1" id="intro1" value={form.intro && form.intro.intro1 ? form.intro.intro1 : ''} onChange={handleChange} />
        <FromGroupInput name="角色介紹2" id="intro2" value={form.intro && form.intro.intro2 ? form.intro.intro2 : ''} onChange={handleChange} />

        <AdminCustomButton edit={submitButton} />

      </form>
    </div>
  );
}

export default AdminCharacterAdd;