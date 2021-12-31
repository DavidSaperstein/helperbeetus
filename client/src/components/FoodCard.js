import React from 'react'

export default function FoodCard(props){
  
  return (
    <div>
      <div className='food-title-container'>
        <h2>{props.name}</h2>
        <Link to='edit-food'></Link>
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