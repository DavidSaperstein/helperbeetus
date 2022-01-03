import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './../../context/UserProvider.js'
import Ratio from './Ratio.js'
import UserInfo from './UserInfo.js'

export default function Signup(props) {
  let navigate = useNavigate()

  const{ signup, errMsg } = useContext(UserContext)

  const initInputs = {
    email: '',
    password: '',
    confirm: '',
    name: '',
    foodRatio: '',
    bloodRatio: ''
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

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirm, setConfirm] = useState('')
  // const [name, setName] = useState('')
  // const [carbRatio, setCarbRatio] = useState(0)
  // const [bloodRatio, setBloodRatio] = useState(0)
  const [step, setStep] = useState(1)

  // const inputs = {email, password, name, carbRatio, bloodRatio, confirm}
  // const setInputs = {setEmail, setPassword, setConfirm, setName, setCarbRatio, setBloodRatio}

  async function handleSignup(e){
    e.preventDefault()
    delete inputs.confirm
    await props.signup(inputs)
    setInputs(initInputs)
    navigate('/dashboard')
  }

  return (
    <div className='signup-container'>
      <div>
        {/* <button></button> go back arrow functionality needs to be added */}
      </div>
      <h1>Account Creation</h1>
      <nav>
        <button onClick={() => setStep(1)} >
          1. Info
        </button>
        <button onClick={() => setStep(2)} disabled={inputs.password !== inputs.confirm}>
          2. Ratio
        </button>
      </nav>
      {step === 1 && (<UserInfo inputs={inputs} setInputs={setInputs}  setStep={setStep} handleChange={handleChange} />)}
      {step === 2  && (<Ratio inputs={inputs} setInputs={setInputs} handleSignup={handleSignup} handleChange={handleChange} />)}
    </div>
  )
}