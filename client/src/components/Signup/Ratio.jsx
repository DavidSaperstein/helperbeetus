import React from 'react'
import { Link } from 'react-router-dom'
import './Ratio.scss'


export default function Ratio(props) {

  const { inputs, handleChange, handleSignup } = props
  const { foodRatio, bloodRatio, password, confirm, name, email } = inputs


  return (
    <div className='ratio-section'>
      <h2>Enter your ratios</h2>
      <form>

        <label className='ratio-info-label'>
          What is your carb ratio?
          <div className='ratio-section-input-container'>
            <span>1 unit per</span>
            <input
              type='number'
              name='foodRatio'
              value={foodRatio}
              onChange={handleChange}
              style={{
                borderBottom: `${foodRatio === 0 || !foodRatio ? '#7354F0' : '#EBE8ED'} 0.4rem solid`
              }}
            /> 
            <span>carbs</span>
          </div>
        </label>

        <label className='ratio-info-label'>
          What is your blood sugar correction ratio?
          <div className='ratio-section-input-container'>
            <span>1 Unit per </span>
            <input
              type='number'
              name='bloodRatio'
              value={bloodRatio}
              onChange={handleChange}
              style={{
                borderBottom: `${bloodRatio === 0 || !bloodRatio ? '#7354F0' : '#EBE8ED'} 0.4rem solid`
              }}
            />
            <span>mg/dL above 150(200 after bedtime).</span>
          </div>        
        </label>

        <div className='complete-button-container'>
          <button 
            onClick={handleSignup}
            disabled={password !== confirm || password === '' || name === '' || email === ''}
            style={{backgroundColor: password !== confirm || password === '' || name === '' || email === '' ? '#717181' : '#7354F0'}}
          >
            Complete
          </button>
        </div>

      </form>
    </div>
  )
}