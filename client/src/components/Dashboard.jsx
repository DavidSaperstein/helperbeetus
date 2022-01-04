import React, { useContext, useEffect } from 'react'
import { UserContext } from './../context/UserProvider.js'
import Welcome from './Welcome.js'
import Navbar from './Navbar.js'

export default function Dashboard(props){

  const { getUserFood, listState, setListState, userState, logout } = useContext(UserContext)

  useEffect(() => {
    if(userState.token) {
      getUserFood()
    }
  }, [])

  useEffect(() => {
    if(userState.token) {
      getUserFood()
    }
  }, [userState.token])

  return (
    <div>
      <Welcome dashboard={true}/>
      <h1>Dashboard</h1>
      <div>
        <h2>Last Check</h2>
        {/* <p>{userState.user.lastDose ? userState.user.lastDose : ''}</p> */}
      </div>
      <div>
        <h2>Next Check</h2>
        <p>Time</p>
      </div>
      <button onClick={logout}>Logout</button>
      <Navbar />
    </div>
  )
}