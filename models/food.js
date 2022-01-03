const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const foodSchema = new Schema({
  //the user who input the food
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  //the name of the food
  name: {
    type: String,
    required: true,
  },
  //is this food for emergency lows
  emergencyFood: {
    type: Boolean
  },
  //carbohydrates per serving
  carbCount: {
    type: Number
  },
  //what quantity per serving
  servingSize: {
    type: Number
  },
  //what unit is this measured in? grams, ounces, etc.
  servingUnit: {
    type: String
  },
  //notes such as reduce food dose by this many units
  notes: {
    type: String
  }
})

module.exports = mongoose.model("Food", foodSchema)