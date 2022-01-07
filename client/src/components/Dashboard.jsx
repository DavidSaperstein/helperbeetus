import React, { useContext, useEffect } from 'react'
import { UserContext } from './../context/UserProvider.jsx'
import './Dashboard.scss'

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
    <div className='dashboard-page middle-screen'>
      <div className='dashboard-check-history'>
        <div className='check-history left'>
          <h2>Last Check</h2>
          <p>
            100
            <span>mg/dL</span>
          </p>
        </div>
        <div className='check-history right'>
          <h2>Next Check</h2>
          <p>0
            <span></span>
          </p>
        </div>
      </div>
    </div>
  )
}