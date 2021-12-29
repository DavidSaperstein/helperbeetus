import React from 'react'
import { Link } from 'react-router-dom'


export default function UserInfo(props) {

  const { setStep, handleChange, inputs } = props
  const { name, email, password, confirm } = inputs

  function handleContinue(e){
    e.preventDefault()
    setStep(2)
  }

  return (
    <div>
      <h1>Login info</h1>
      <p>Enter your email and create a password for your login</p>
      <form onSubmit={handleContinue}>
        <label>Tell us your name
          <input 
            name='Name'
            value={name}
            onChange={handleChange}
            placeholder='Name'
          />
        </label>
        <label>Enter your email
          <input
            name='Email'
            value={email}
            onChange={handleChange}
            placeholder='Email'
          />
        </label>
        <label>Create a password
          <input
            name='Password'
            value={password}
            onChange={handleChange}
            placeholder='Password'
          />
        </label>
        <label>Confirm password
          <input
            name='Confirm'
            value={confirm}
            onChange={handleChange}
            placeholder='Password'
          />
          {password != confirm && confirm != '' && (<span>Password doesn't match.</span>)}
        </label>
        <button
          disabled={password != confirm}
        >
          Continue
        </button>
      </form>
    </div>
  )  
}