const mongoose  = require("mongoose");
//import mongoose from "mongoose"; 

let CategorySchema= new mongoose.Schema({
   "codeCategory":Number,
   "nameCategory":String
})
let CategoryModel = mongoose.model('category',CategorySchema)
module.exports = CategoryModel;