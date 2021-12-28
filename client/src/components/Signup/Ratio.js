import React from 'react'
import { Link } from 'react-router-dom'

export default function Ratio(props) {

  const { inputs, handleChange } = props
  
  return (
    <div>
      <h2>Welcome to Helperbeetus!</h2>
      <p>We are here to take the math out of checking your blood sugar.</p>
      <form>
        <label> What is your carb ratio?
          1 unit per
          <input
            type='number'
            name='carb'
            value={inputs.carbRatio}
            onChange={handleChange}
          />
        </label>
        <label>What is your blood sugar correction ratio?
          1 unit per
          <input
            type='number'
            name='blood'
            value={inputs.bloodRatio}
            onChange={handleChange}
          />
          above range.
        </label>
      </form>
      <button>Continue</button>
    </div>
  )
}