import React from 'react'
import Welcome from './Welcome.js'

export default function Dashboard(props){

  return (
    <div>
      <Welcome dashboard={true}/>
      <h1>Dashboard</h1>
      <div>
        <h2>Last Check</h2>
        <p>{props.lastDose}</p>
      </div>
      <div>
        <h2>Next Check</h2>
        <p>Time</p>
      </div>
    </div>
  )
}