import React, { useState, useContext } from 'react'
import { UserContext } from './../context/UserProvider.jsx'
import Welcome from './Welcome.jsx'
import Navbar from './Navbar.jsx'


export default function Calculator(props) {

  const { userState } = useContext(UserContext)

  const initInputs = {
    carbs: 0,
    blood: 0,
    bedtime: false,
  }

  const [ inputs, setInputs ] = useState(initInputs)
  const [recommendedDose, setRecommendedDose] = useState(0)

  function handleChange(e) {
    e.preventDefault()
    const target = e.target
    const name = e.target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleCalculation(e) {
    e.preventDefault()
    const bedtimeAdjustment = inputs.bedtime ? 50 : 0
    const foodDose = Math.round(inputs.carbs/userState.user.foodRatio)
    const bloodDose = Math.round((inputs.blood-bedtimeAdjustment-150)/userState.user.bloodRatio)
    setRecommendedDose(foodDose + bloodDose)
    setInputs(initInputs)
  }

  return (
    <main className="middle-screen">
      
      <form onSubmit={handleCalculation}>

        <label>Enter carbs or seleft from 'My Foods'
          <input
            type='number'
            name='carbs'
            value={inputs.carbs}
            onChange={handleChange}
            placeholder='Amount'
          />
          <span>Carbs</span>
        </label>

        <label>Enter Blood Sugar
          <input
            type='number'
            name='blood'
            value={inputs.blood}
            onChange={handleChange}
            placeholder='Amount'
          />
          <span>mg/dL</span>
        </label>

        <label>Is this a bedtime dose?
          <input
            type="checkbox"
            checked={inputs.bedtime}
            onChange={handleChange}
          />
        </label>

        <button>Get Dose</button>
      </form>

      <label>Recommended Dose
        <div>{ recommendedDose } Units</div>
      </label>
    </main>
  )
}