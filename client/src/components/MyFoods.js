import React from 'react'
import FoodList from './FoodList.js'
import Navbar from './Navbar.js'

export default function MyFoods(props){

  return (
    <div>
      <h1>My foods</h1>
      <nav>
        <div>Favorites</div>
        <div>Good When Low</div>
      </nav>
      <div className='food-container'>
        <FoodList />
      </div>
      <Link to='addfood'>+</Link>
    </div>
  )
}