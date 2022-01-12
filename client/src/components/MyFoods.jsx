import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './../context/UserProvider.jsx'
import FoodList from './FoodList.jsx'
import Navbar from './Navbar.jsx'
import Welcome from './Welcome.jsx'
import Arrow from './Arrow.jsx'
import SettingsWheel from './SettingsWheel.jsx'

export default function MyFoods(props){

  const { listState, setListState, userState, getUserFood } = useContext(UserContext)

  // useEffect(() => {
  //   if(userState.token) {
  //     getUserFood()
  //   }
  // }, [])

  useEffect(() => {
    if(userState?.token && userState.food.length === 0) {
      getUserFood()
    }
  }, [])


  return (
    <main className="middle-screen">
      <nav>
        <button onClick={() => setListState('favorites')}>
          Favorites
        </button>
        <button onClick={() => setListState('low')}>
          Good When Low
        </button>
      </nav>
      <div className='food-container'>
        {userState.food.length > 0 ? <FoodList list={listState} /> : <p>No food found</p>}
      </div>
      <Link to='/my_foods/add_food'>Add Food</Link>
    </main>
  )
}