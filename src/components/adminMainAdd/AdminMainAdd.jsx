import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addPostCardStart, editPostCardStart } from '../../redux/postCard/postCard.action'
import { useHistory } from 'react-router-dom'

import FromGroupInput from '../formGroupInput/FormGroupInput'
import FromSelectInput from '../formSelectInput/FormSelectInput'
import AdminCustomButton from '../adminCustomButton/AdminCustomButton'

import { NoInput, saveWarning } from '../../effects/sweetAlert2.effects'


function AdminAdd({ selectedPostCard, title, submitButton, edit }) {
  const [form, setForm] = useState({ media: 'default', date: '', photo: '', link: '' })
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (selectedPostCard) {
      setForm(selectedPostCard)
    }
  }, [selectedPostCard])

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.media) {
      NoInput('來源')
      return
    } else if (!form.date) {
      NoInput('日期')
      return
    }
    else if (!form.photo) {
      NoInput('照片')
      return
    }
    else if (!form.link) {
      NoInput('連結')
      return
    }

    if (!edit) {
      dispatch(addPostCardStart({ form, setForm }))
    } else {
      saveWarning().then((result) => {
        if (result.isConfirmed) {
          dispatch(editPostCardStart({ form, history }))
        }
      })
    }
  }

  function handleChange(event) {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className="adminAdd__page pageContainer max-width-big-desktop">
      <form className="adminAdd__form" onSubmit={handleSubmit}>
        <h1 className="adminAdd__title">{title}</h1>
        <FromSelectInput name="來源" id="media" value={form.media} onChange={handleChange} >
          <option value="fb">FB</option>
          <option value="ig">IG</option>
        </FromSelectInput>
        <FromGroupInput name="日期" id="date" value={form.date} type="date" onChange={handleChange} />
        <FromGroupInput name="照片連結" id="photo" value={form.photo} onChange={handleChange} />
        <FromGroupInput name="貼文連結" id="link" value={form.link} onChange={handleChange} />

        <AdminCustomButton edit={submitButton} />

      </form>
    </div>
  );
}

export default AdminAdd;