import React from 'react'
import { Link } from 'react-router-dom'


export default function UserInfo(props) {

  const { inputs, handleChange } = props

  return (
    <div>
      <h1>Login info</h1>
      <p>Enter your email and create a password for your login</p>
      <form>
        <label>Tell us your name
          <input 
            name='Name'
            value={inputs.name}
            onChange={handleChange}
            placeholder='Name'
          />
        </label>
        <label>Enter your email
          <input
            name='Email'
            value={inputs.email}
            onChange={handleChange}
            placeholder='Email'
          />
        </label>
        <label>Create a password
          <input
            name='Password'
            value={inputs.password}
            onChange={handleChange}
            placeholder='Password'
          />
        </label>
        <label>Confirm password
          <input
            name='Confirm'
            value={inputs.confirm}
            onChange={handleChange}
            placeholder='Password'
          />
        </label>
      </form>
      <button>Continue</button>
    </div>
  )
  
}