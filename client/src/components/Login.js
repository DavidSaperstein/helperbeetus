import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './../context/UserProvider.js'
import PlusSignSmall from '../assets/PlusSignSmall.jsx'
import hero from './../assets/hero.svg'
import plus from './../assets/plus-sign-small.svg'
import './Login.scss'

export default function Login(props) {

  const initInputs = {email: '', password: ''}

  const { login, errMsg, getUserFood } = useContext(UserContext)
  const [inputs, setInputs] = useState(initInputs)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e){
    e.preventDefault()
    const inputs = {email, password}
    await login(inputs)
    setInputs(initInputs)
  }

  return (
    <main className='login-page'>
      <img 
        className='hero' 
        src={hero} 
        alt='Helperbeetus Walrus' 
      />
      <div className='login-section'>
        <form className='form-container' onSubmit={handleLogin}>
          <h1>Login</h1>
          <label>Enter email
            <input
              className='login-input'
              type='text'
              value={email}
              name='Email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
          </label>
          <label>Enter password
            <input
              className='login-input'
              type='text'
              value={password}
              name='Password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </label>
          <input 
            className='login-button'
            type="submit" 
            value='LOGIN'
          />
        </form>
        <label className='create-account-label'>
          Don't have an account?
          <Link 
            className='create-account-link' 
            to="/create-account"
          >
            <button className='create-account'>
              <PlusSignSmall color={'#7354F0'} />
              <span>Create account</span>
            </button>
          </Link>
        </label>
      </div>
    </main>
  )
}