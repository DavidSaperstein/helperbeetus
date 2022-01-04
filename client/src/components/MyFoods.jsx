import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './../context/UserProvider.js'
import FoodList from './FoodList.js'
import Navbar from './Navbar.js'

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
    <div>
      <h1>My foods</h1>
      {/* <nav>
        <button onClick={() => setListState('favorites')}>
          Favorites
        </button>
        <button onClick={() => setListState('low')}>
          Good When Low
        </button>
      </nav> */}
      <div className='food-container'>
        {userState.food.length > 0 ? <FoodList list={listState} /> : <p>No food found</p>}
      </div>
      <Link to='/myfoods/addfood'>Add Food</Link>
      <Navbar />
    </div>
  )
}