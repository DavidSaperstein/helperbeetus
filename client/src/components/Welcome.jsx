import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.jsx'
import { useLocation } from 'react-router-dom'
import Arrow from './Arrow.jsx'
import SettingsWheel from './SettingsWheel.jsx'
import './Welcome.scss'

export default function Welcome(props){

  const { userState } = useContext(UserContext)
  const location = useLocation().pathname
  const newLocation = location.split("/").pop().split("_").join(" ")

  console.log(newLocation)
  

  return (
    <header>
      <div className='header-top-container'>
        <div className='welcome-left'>
          {location !== '/dashboard' && <Arrow /> }
          <p className='welcome-statement'>Welcome, {userState.user.firstName}</p>
        </div>
        <SettingsWheel />
      </div>
      <h1 className='page-name'>{newLocation}</h1>
    </header>
  )
}