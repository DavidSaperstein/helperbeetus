import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import './App.scss'

export const baseURL = process.env.REACT_APP_IS_PRODUCTION ? 'https://helperbeetus.herokuapp.com/api' : `http://localhost:8080/api`

function App() {

  return (
    <div className="app">
      App
    </div>
  )
}

export default App
