import React, { useState, useContext } from 'react'
import { UserContext } from './../../context/UserProvider.js'

export default function Signup(props) {

  const{ signup, errMsg } = useContext(UserContext)

  const initInputs = {
    username: '',
    password: '',
    confirm: '',
    name: '',
    carbRatio: 0,
    bloodRatio: 0,
  }

  const [inputs, setInputs] = useState(initInputs)
  const [step, setStep] = useState(1)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    const newInputs = {...inputs}
    delete newInputs[confirm]
    signup(inputs)
  }

  return (
    <div className='signup-container'>
      <div>
        {/* <button></button> go back arrow functionality needs to be added */}
      </div>
      <h1>Account Creation</h1>
      <nav>
        <button>1. Info</button>
        <button>2. Ratio</button>
      </nav>
      {step === 1 && (<UserInfo inputs={inputs} handleChange={handleChange}  setStep={setStep}/>)}
      {step === 2  && (<Ratio inputs={inputs} handleChange={handleChange} handleSignup={handleSignup} />)}
    </div>
  )
}