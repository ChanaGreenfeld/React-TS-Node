const express = require("express");
const productControl =require("./controllers/products")
const CategoryControl = require("./controllers/category")
const usersControl=require('./controllers/users')
var cors = require('cors');
let app =express();
app.use(cors());
app.use(express.json());
require('./dataBase')
app.use('/api/products',productControl)
app.use('/api/category',CategoryControl)
app.use('/api/users',usersControl)
app.listen(8000);
