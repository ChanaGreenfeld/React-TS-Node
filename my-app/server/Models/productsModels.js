const mongoose  = require("mongoose");
//import mongoose from "mongoose"; 
let ProductSchema= new mongoose.Schema({
    "name":String,
    "code":Number,
    "codeCategory":Number,
    "price":Number,
    "units":Number,
    "pic":String
})

let productModel = mongoose.model('products',ProductSchema)
module.exports = productModel;