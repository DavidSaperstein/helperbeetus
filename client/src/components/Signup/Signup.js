import React, { useState } from 'react'

export default function Signup(props) {

  const initInputs = {
    username: '',
    password: '',
    confirm: '',
    name: '',
    daytimeRange: 0,
    nighttimeRange: 0,
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

  return (
    <div className='signup-container'>
      <div>
        {/* <button></button> go back arrow functionality needs to be added */}
      </div>
      <h1>Account Creation</h1>
      <nav>
        <button>1. Info</button>
        <button>2. Ratio</button>
        <button>3. Ranges</button>
      </nav>
      {step === 1 && (<UserInfo inputs={inputs} handleChange={handleChange} />)}
      {step === 2  && (<Ratio inputs={inputs} handleChange={handleChange} />)}
      {step === 3 && (<Ranges inputs={inputs} handleChange={handleChange} />)}
    </div>
  )
}