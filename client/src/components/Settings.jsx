import React, { useState, useContext }  from 'react'
import { UserContext } from '../context/UserProvider.jsx'

export default function Settings(props) {

  const { userState } = useContext(UserContext)
  const { firstName, email, foodRatio, bloodRatio } = userState.user

  // const { editToggle, setEditToggle } = useState(false)
  
  // const initInputs = { user, email, foodRatio, bloodRatio }
  // const [ inputs, setInputs ] = useState({...initInputs})

  // function handleChange(e){
  //   e.preventDefault()
  //   const {name, value} = e.target
  //   setInputs(prevInputs => ({
  //     ...prevInputs,
  //     [name]: value
  //   }))
  // }

  return (
    <main>
      <h1>Settings</h1>
        <div className='settings-user-info'>
          <h2>Login Info</h2>
          <label>
            Name
              <p>{firstName}</p> 
          </label>
          <label>
            Email
            <p>{email}</p>
          </label>
        </div>
        <div className='settings-ratios'>
          <h2>My Ratios</h2>
          <label>
            Carb Ratio
            <p>{foodRatio}</p>
          </label>
          <label>
            Correction Ratio
            <p>{bloodRatio}</p>
          </label>
        </div>
    </main>
  )
}