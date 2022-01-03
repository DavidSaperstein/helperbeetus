import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from './../context/UserProvider.js'
import FoodCard from './FoodCard.js'

export default function FoodList(props){

  const { userState } = useContext(UserContext)

  return (

    <div>
      {userState.food?.map((food) => {
        if(food?.name) {
          return <FoodCard {...food} />
        } else {
          return <p>error</p>
        }
      })}
      {/* {userState?.food?.map((food, i) => {
          if(props.list === 'low' && food.emergencyFood && userState.food.length > 0 ) {
            return <FoodCard 
                      name={food.name} 
                      carbCount={food.carbCount} 
                      servingSize={food.servingSize} 
                      notes={food.notes} 
                      _id={props._id} 
                    />
          }
          if(props.list === 'favorites' && !food.emergencyFood && userState.food.length > 0) {
            return <FoodCard name={food.name} />
          }
      })} */}
    </div>
  )

}