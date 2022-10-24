const mongoose  = require("mongoose");
//import mongoose from "mongoose"; 
let UsersSchema = new mongoose.Schema({
  "firstName": String,
  "lastName": String,
  "phone": String,
  "email": String,
  "password":String,
  "role":String,
  "address": {
    "city": String,
    "street": String,
    "numBuild":Number,
  },
})
let userModel = mongoose.model('users', UsersSchema)
module.exports = userModel
