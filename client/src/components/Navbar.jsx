import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import calculator from '../assets/calculator.svg'
import food from '../assets/food.svg'
import home from '../assets/home.svg'
import './Navbar.scss'

export default function Navbar(props){
  
  const [location, setLocation] = useState('dashboard')

  return (
    <footer>
      <div className='navbar-link'>
        <Link to='/calculator'>
          <img src={calculator} alt={'calulator'} />
          <h3>Calculator</h3>
        </Link>
      </div>

      <div className='navbar-link'>
        <Link to='/dashboard' className='navbar-link'>
          <img src={home} alt={'home'} />
          <h3>Home</h3>
        </Link>
      </div>

      <div className='navbar-link'>
        <Link to='/my_foods' className='navbar-link'>
          <img src={food} alt={'food'} />
          <h3>My Foods</h3>
        </Link>
      </div>
    </footer>
  )
}