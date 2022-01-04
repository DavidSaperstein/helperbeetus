import axios from 'axios'
import React, { useEffect, useReducer, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './context/UserProvider.js'
import './App.scss'
import Login from './components/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Dashboard from './components/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import MyFoods from './components/MyFoods.jsx'
import Calculator from './components/Calculator.jsx'
import FoodForm from './components/FoodForm.jsx'



export const baseURL = process.env.REACT_APP_IS_PRODUCTION ? 'https://helperbeetus.herokuapp.com/api' : `http://localhost:8080/api`

function App() {
  const { userState, logout, login, signup, } = useContext(UserContext)
  const { user, token } = userState


  return (
    <div className="app">
      <Routes>
      <Route
          path="/"
          element={token ? <Navigate to="/dashboard"/> : <Login />}
      />
      <Route
        path="/create-account"
        element={<Signup signup={signup}/>}
      />
      <Route
        path="/dashboard"
        element={<Dashboard user={user}/>}
      />
      <Route
        path="/myfoods"
        element={<MyFoods />}
      />
      {/* // <Route
        path="/mysettings"
        render={() => <Settings />}
      /> */}
      <Route
        path="/myfoods/addfood"
        element={<FoodForm />}
      />
      <Route
        path="/myfoods/editfood"
        element={<FoodForm edit={true}/>}
      />

      <Route
        path="/calculator"
        element={<Calculator />}
      />
      </Routes>
      {token && <Navbar />}
    </div>
  )
}

export default App
