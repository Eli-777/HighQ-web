import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../redux/user/user.action.js'
import { auth } from '../../firebase/firebase.utils'

import FormLoginInput from '../../components/formLoginInput/FormLoginInput.jsx'
import AdminCustomButton from '../../components/adminCustomButton/AdminCustomButton'
import icon from '../../assets/icon2x.png'

import { loginNoInput, loginFail } from '../../effects/sweetAlert2.effects'

import './adminLogin.style.scss'

function AdminLogin(props) {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    try {

      event.preventDefault()

      if (!email) {
        loginNoInput('email')
        return
      } else if (!password) {
        loginNoInput('密碼')
        return
      }


      const { user } = await auth.signInWithEmailAndPassword(email, password)

      dispatch(setCurrentUser(user.email))
      history.push('/admin/main')
      setCredentials({ email: '', password: '' })
    } catch (error) {
      loginFail()
    }
  }



  const handleChange = event => {
    const { value, name } = event.target
    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="adminLogin">
      <form className="adminLogin__platform" onSubmit={handleSubmit}>
        <div className="adminLogin__image">
          <img src={icon} alt="icon" />
        </div>
        <h1 className="adminLogin__title">
          後台登入
        </h1>
        <FormLoginInput
          name="email"
          type="email"
          value={email}
          label='email'
          onChange={handleChange}
          required
        />
        <FormLoginInput
          name="password"
          type="password"
          value={password}
          label='password'
          onChange={handleChange}
          required
        />

        <AdminCustomButton edit="登入" />
      </form>
    </div>
  );
}

export default AdminLogin;