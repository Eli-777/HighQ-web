import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../custom-button/CustomButton'

import './notFound.style.scss'

export default class NotFound extends Component {
  render() {
    return (
      <div className="pageContainer notFound">
        <div className="notFound__img"></div>
        <h1 className="title">Oops! 找不到您所要求的網頁</h1>
        <CustomButton type="button" notFound>
          <Link to="/">請點選這裡回首頁</Link>
        </CustomButton>
      </div>
    )
  }
}
