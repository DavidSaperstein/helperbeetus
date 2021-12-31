import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome(props){

  return (
    <div>
      {props.dashboard && (<Link to='/dashboard'>Arrow Icon</Link>)}
      <p>Welcome, {props.name}</p>
      <Link to='/mysettings'>Wheel Icon</Link>
    </div>
  )
}