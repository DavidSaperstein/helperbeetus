import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './../context/UserProvider'
import Welcome from './Welcome.js'

export default function FoodForm(props) {

  let navigate = useNavigate()

  const { edit, id } = props
  const { addFood, editFood, getUserFood } = useContext(UserContext)

  const initInputs = {
    name: '',
    carbCount: 0,
    servingSize: 0,
    servingUnit: 'g',
    emergencyFood: 'false',
    notes: '',
  }

  const [inputs, setInputs] = useState(edit ? props.inputs : initInputs)

  function handleChange(e) {
    e.preventDefault()
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  async function handleAddFood(e) {
    e.preventDefault()
    await addFood(inputs)
    getUserFood()
    navigate('/myfoods')
  }

  async function handleEditFood(e){
    e.preventDefault()
    await editFood(inputs, id)
    setInputs(initInputs)
    navigate('/myfoods')
  }

  const options1 = [
    {
      value: 'g',
      label: 'g'
    },
    {
      value: 'oz',
      label: 'oz'
    }
  ]

  const options2 = [
    {
      value: 'false',
      label: 'Favorites'
    },
    {
      value: 'true',
      label: 'Good for Lows (15 carb snacks)'
    }
  ]
  
  
  return (
    <div>
      <Welcome />
      <h1>{edit ? 'Edit Food' : 'Add Food'}</h1>
      <div>Enter food info and any notes to go with it.</div>
      <form onSubmit={edit ? handleEditFood : handleAddFood}>
        <label>Name of food
          <input
            type='text'
            name='name'
            value={inputs.name}
            onChange={handleChange}
            placeholder='Name'
            required
          />
        </label>

        <label>How many carbs per serving?
          <input
            type='number'
            name='carbCount'
            value={inputs.carbCount}
            onChange={handleChange}
            placeholder='Carbs'
            required
          />
        </label>

        <label>Serving size?
          <input
            type='number'
            name='servingSize'
            value={inputs.servingSize}
            onChange={handleChange}
            placeholder='Serving Size'
            required
          />
        </label>

        <label>Unit?
          <select 
            value={inputs.servingUnit}  
            onChange={handleChange}
            required 
          >
            {options1.map((option) => (
              <option value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>Choose a category
          <select
            value={inputs.emergencyFood}
            onChange={handleChange}
            required
          >
            {options2.map((option) => (
              <option value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        
        <label>Notes
          <textarea
            name='notes'
            value={inputs.notes}
            onChange={handleChange}
            placeholder='Ex. I usually dose 1 less unit with this meal.'
          />
        </label>

        <button>Save</button>

      </form>
    </div>
  )
}