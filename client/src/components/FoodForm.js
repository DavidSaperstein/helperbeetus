import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Welcome from './Welcome.js'

export default function FoodForm(props) {

  let navigate = useNavigate()

  const { edit, id, addFood, editFood } = props

  const initInputs = {
    name: '',
    carbCount: 0,
    servingSize: 0,
    servingUnit: 'g',
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
    navigate('/myfoods')
  }

  async function handleEditFood(e){
    e.preventDefault()
    await editFood(inputs, id)
    navigate('/myfoods')
  }

  const options = [
    {
      value: 'g',
      label: 'g'
    },
    {
      value: 'oz',
      label: 'oz'
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
            value={inputs.carbCount}
            onChange={handleChange}
            placeholder='Serving Size'
            required
          />
        </label>

        <label>Unit?
          <select 
            value={inputs.servingUnit}  
            onChange={handleChange} 
          >
            {opts.map((option) => (
              <option value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

      </form>
    </div>
  )
}