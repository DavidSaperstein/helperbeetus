import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  let navigate = useNavigate()

  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    food: [],
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)
  const [listState, setListState] = useState('favorite')

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token,
        }))
        getUserFood()
        console.log(userState)
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
    })
    navigate('/')
  }

  function handleAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function getUserFood(){
    console.log("getting user food")
    userAxios.get("/api/food/user")
      .then(res => {
        console.log("res", res)
        setUserState(prevState => ({
          ...prevState,
          food: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addFood(newFood){
    userAxios.post("/api/food", newFood)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          food: [...prevState.food, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function editFood(updates, id) {
    userAxios.put(`/api/food/${id}`, updates)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          food: prevState.food.map(food => food._id !== id ? food : res.data)
        }))
      })
      .catch(err => console.error(err))
  }


  return (
    <UserContext.Provider
      value={{
        userState,
        listState,
        setListState,
        signup,
        login,
        logout,
        addFood,
        editFood,
        userAxios,
        getUserFood
      }}
    >
      { props.children }
    </UserContext.Provider>
  )
}
