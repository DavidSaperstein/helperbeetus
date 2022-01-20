const express = require('express')
const userSettingsRouter = express.Router()
const Helperbeetus_user = require('../models/user.js')

//update user settings

userSettingsRouter.put("/update", (req, res, next) => {
  Helperbeetus_user.findOneAndUpdate(
    { _id: req.user._id },
    req.body,
    { new: true },
    (err, updatedUser) => {
      if(err){
        console.log(req.body)
        res.status(500)
        return next(err)
      }
      console.log(req.body)
      return res.status(201).send(updatedUser)
    }
  )
})

module.exports = userSettingsRouter