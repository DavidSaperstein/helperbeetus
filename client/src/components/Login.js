import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './../context/UserProvider.js'

export default function Login(props) {

  const initInputs = {email: '', password: ''}

  const { login, errMsg } = useContext(UserContext)
  const [inputs, setInputs] = useState(initInputs)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e){
    e.preventDefault()
    const inputs = {email, password}
    login(inputs)
  }

  return (
    <div>
      {/* image goes there<img alt='filler'></img> */}
      <form className='form-container' onSubmit={handleLogin}>
        <label>Enter email
          <input
            type='text'
            value={email}
            name='Email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </label>
        <label>Enter password
          <input
            type='text'
            value={password}
            name='Password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Email'
          />
        </label>
        <input type="submit" value='Login'/>
      </form>
      <label>Don't have an account?
        <Link to="/create-account">Create account</Link>
      </label>
    </div>
  )
}