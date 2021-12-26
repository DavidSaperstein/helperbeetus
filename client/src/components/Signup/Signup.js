import React, { useState } from 'react'

export default function Signup(props) {

  const initInputs = {
    username: '',
    password: '',
    name: '',
    daytimeRatio: 0,
    nighttimeRatio: 0,
    foodRatio: 0,
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
      {/* <button></button> go back arrow functionality needs to be added */}
      <h1>Account Creation</h1>
      <nav>
        <button>1. Info</button>
        <button>2. Ratio</button>
        <button>3. Ranges</button>
      </nav>
      {step === 1 && (<UserInfo />)}
      {step === 2  && (<Ratio />)}
      {step === 3 && (<Ranges />)}
    </div>
  )
}