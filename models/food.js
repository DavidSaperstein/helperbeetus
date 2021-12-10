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
  //serving size in grams
  servingGrams: {
    type: Number
  },
  //serving size in ounces
  servingOunces: {
    type: Number
  },
  //reduce food dose by this many units
  reduceBy: {
    type: Number
  }
})

module.exports = mongoose.model("Food", foodSchema)