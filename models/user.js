const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: TextTrackCue,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  daytimeRatio: {
    type: Number
  },
  bedtimeRatio: {
    type: Number
  },
  foodRatio: {
    type: Number
  },
  currentBloodsugar: {
    type: Number
  }
})

module.exports = mongoose.model("User", userSchema)