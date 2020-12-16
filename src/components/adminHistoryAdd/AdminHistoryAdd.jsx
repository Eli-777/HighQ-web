import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { editHistoryStart, addHistoryStart } from '../../redux/history/history.action'
import { useHistory } from 'react-router-dom'

import FromGroupInput from '../formGroupInput/FormGroupInput'
import FromSelectInput from '../formSelectInput/FormSelectInput'
import FormTextareaInput from '../formTextareaInput/FormTextareaInput'
import AdminCustomButton from '../adminCustomButton/AdminCustomButton'

import { NoInput, saveWarning, blankWarning } from '../../effects/sweetAlert2.effects'


function AdminHistoryAdd({ selectedHistory, title, submitButton, edit }) {
  const [form, setForm] = useState({
    type: 'default',
    date: '',
    img: '',
    desc: ''
  })
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (selectedHistory) {
      setForm(selectedHistory)
    }
  }, [selectedHistory])

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.type) {
      NoInput('類型')
      return
    } else if (!form.date) {
      NoInput('日期')
      return
    }
    else if (!form.desc) {
      NoInput('描述')
      return
    } else if (form.desc.trim() === '') {
      blankWarning()
      return
    }


    if (!edit) {
      dispatch(addHistoryStart({ form, setForm }))
    } else {
      saveWarning().then((result) => {
        if (result.isConfirmed) {
          dispatch(editHistoryStart({ form, history }))
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
        <FromSelectInput name="類型" id="type" value={form.type} onChange={handleChange} >
          <option value="product">產品</option>
          <option value="history">事件</option>
        </FromSelectInput>
        <FromGroupInput name="日期" id="date" type="date" value={form.date} onChange={handleChange} />
        <FromGroupInput name="圖片" id="img" type="text" value={form.img} onChange={handleChange} />
        <FormTextareaInput name="描述" id="desc" value={form.desc} onChange={handleChange} />

        <AdminCustomButton edit={submitButton} />

      </form>
    </div>
  );
}

export default AdminHistoryAdd;