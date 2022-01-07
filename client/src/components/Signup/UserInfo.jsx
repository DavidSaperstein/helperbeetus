import React from 'react'
import { Link } from 'react-router-dom'
import './UserInfo.scss'


export default function UserInfo(props) {

  const { setStep, handleChange, inputs } = props
  const { firstName, email, password, confirm } = inputs

  function handleContinue(e){
    e.preventDefault()
    setStep(2)
  }

  return (
    <div className='info-section'>
      <h2 className='info-header'>Login info</h2>
      <form onSubmit={handleContinue}>

        <label className='login-info-label'>
          Tell us your name
          <input 
            type='text'
            name='firstName'
            value={firstName}
            onChange={handleChange}
            placeholder='First Name'
            // style={{
            //   borderBottom: `${name === '' ? '#7354F0' : '#EBE8ED'} 0.4rem solid`
            // }}
          />
        </label>

        <label className='login-info-label'>
          Enter your email
          <input
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='Email'
            // style={{
            //   borderBottom: `${email === '' ? '#7354F0' : '#EBE8ED'} 0.4rem solid`
            // }}
          />
        </label>

        <label className='login-info-label'>
          Create a password
          <input
            type='text'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder='Password'
            // style={{
            //   borderBottom: `${password === '' ? '#7354F0' : '#EBE8ED'} 0.4rem solid`
            // }}
          />
        </label>

        <label className='login-info-label'>
          Confirm password
          <input
            type='text'
            name='confirm'
            value={confirm}
            onChange={handleChange}
            placeholder='Password'
            // style={{
            //   borderBottom: `${confirm === '' || password !== confirm ? '#7354F0' : '#EBE8ED'} 0.4rem solid`
            // }}
          />
          {password !== confirm && password !== '' && 
            (
              <span 
                style={{color: 'red', fontSize: '1.2rem'}}
              >
                (Password doesn't match)
              </span>
            )
          }
        </label>
        
        <div className='button-container'>
          <button
            disabled={password !== confirm || password === '' || firstName === '' || email === ''}
            style={{
              color: password !== confirm || password === '' || firstName === '' || email === '' ? '#717181' : '#7354F0',
              cursor: password !== confirm || password === '' || firstName === '' || email === '' ? 'not-allowed' : 'pointer'
            }}
          >
            Continue
          </button>
        </div>

      </form>
    </div>
  )  
}