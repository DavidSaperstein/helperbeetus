const express = require('express')
const foodRouter = express.Router()
const Food = require('../models/food.js')

//get food by user id
foodRouter.get("/user", (req, res, next) => {
  Food.find({ user: req.user._id }, (err, foods) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(foods)
  })
})

//get food by food id
foodRouter.get("/:foodId", (req, res, next) => {
  Food.findById(req.params.foodId, (err, food) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(food)
  })
})

//add new food
foodRouter.post("/", (req, res, next) => {
  // Food.findOne({ name: req.body.name }, (err, food) => {
  //   if(food){
  //     res.status(403)
  //     return next(new Error("That food already exists"))
  //   }
  // })
  req.body.user = req.user._id
  const newFood = new Food(req.body)
  newFood.save((err, savedFood) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedFood)
  })
})

//delete food
foodRouter.delete("/:foodId", (req, res, next) => {
  Food.findOneAndDelete(
    { _id: req.params.foodId, user: req.user._id },
    (err, deletedfood) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted food: ${deletedfood.name}`)
    }
  )
})

//update food
foodRouter.put("/:foodId", (req, res, next) => {
  console.log(req.user._id)
  console.log(req.body.upvotes)
  Food.findOneAndUpdate(
    { _id: req.params.foodId },
    req.body,
    { new: true },
    (err, updatedFood) => {
      if(err){
        console.log(req.body)
        res.status(500)
        return next(err)
      }
      console.log(req.body)
      console.log('is this actually posting')
      return res.status(201).send(updatedFood)
    }
  )
})


module.exports = foodRouter