import React from 'react'
import { Link } from 'react-router-dom'
import wheel from './../assets/settings-wheel.svg'
import './SettingsWheel.scss'

export default function SettingsWheel(props){

  return (
    <div className='wheel-container'>
      <Link to={'/my_settings'}>
      <img src={wheel} alt={'settings'} />
      </Link>
    </div>
  )
}