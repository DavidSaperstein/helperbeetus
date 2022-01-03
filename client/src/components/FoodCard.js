import React from 'react'
import { Link } from 'react-router-dom'

export default function FoodCard(props){
  console.log(props)
  console.log(props.name)
  
  return (
    <div>
      <div className='food-title-container'>
        <h2>{props.name}</h2>
        <Link to={`/myfoods/editfood/${props._id}`}>Edit Food</Link>
      </div>
      <div className='carb-count-container'>
        <p>{props.carbCount} per {props.servingSize}{props.servingUnit}</p>
      </div>
      <div className='notes-container'>
        <h3>Notes</h3>
        <p>{props.notes}</p>
      </div>     
    </div>
  )
}