import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './../../context/UserProvider.jsx'
import Ratio from './Ratio.jsx'
import UserInfo from './UserInfo.jsx'
import './Signup.scss'

export default function Signup(props) {
  let navigate = useNavigate()

  const{ signup, errMsg } = useContext(UserContext)

  const initInputs = {
    email: '',
    password: '',
    confirm: '',
    firstName: '',
    foodRatio: 0,
    bloodRatio: 0
  }

  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    e.preventDefault()
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const [step, setStep] = useState(1)


  async function handleSignup(e){
    e.preventDefault()
    delete inputs.confirm
    await props.signup(inputs)
    setInputs(initInputs)
    navigate('/dashboard')
  }

  return (
    <main className='signup-page fullscreen'>
      <div className='account-creation-section'>
        <div>
          {/* <button></button> go back arrow functionality needs to be added */}
        </div>
        <h1 >Account Creation</h1>
        <nav className='account-creation-nav'>
          <button 
            className='account-creation-nav-button' 
            onClick={() => setStep(1)}
            style={{ 
              color: step === 1 && '#7354F0',
              borderBottom: step === 1 && '#7354F0 0.4rem solid'
            }} 
          >
            1. Info
          </button>
          <button 
            className='account-creation-nav-button' 
            onClick={() => setStep(2)}
            style={{ 
              color: step === 2 && '#7354F0', 
              borderBottom: step === 2 && '#7354F0 0.4rem solid'
            }} 
            disabled={inputs.password !== inputs.confirm}
          >
            2. Ratio
          </button>
        </nav>
        {step === 1 && (<UserInfo inputs={inputs} setInputs={setInputs}  setStep={setStep} handleChange={handleChange} />)}
        {step === 2  && (<Ratio inputs={inputs} setInputs={setInputs} handleSignup={handleSignup} handleChange={handleChange} />)}
      </div>
    </main>
  )
}