import React, {useState, useContext} from 'react'
import { UserContext } from './../context/UserProvider.js'

export default function Login(props) {

  const initInputs = {email: '', password: ''}

  const { login, errMsg } = useContext(UserContext)
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleLogin(e){
    e.preventDefault()
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
            onChange={handleChange}
            placeholder='Email'
          />
        </label>
        <label>Enter password
          <input
            type='text'
            value={password}
            name='Password'
            onChange={handleChange}
            placeholder='Email'
          />
        </label>
        <input type="submit" value='Login'/>
      </form>
      <Link>Create an account.</Link> 
    </div>
  )
}