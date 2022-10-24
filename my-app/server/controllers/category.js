const categoryBLL = require("../BLL/categoryBLL");
//import categoryBLL from '../BLL/categoryBLL'
const express = require("express");
//import express from "express";
const router=express.Router();



router.route("/GetAllCategories").get(async function (req, res){
  let data = await categoryBLL.GatAll();
   res.send(data);
});


router.route("/GetCategoryById/:id").get(async function(req, res){
  let pid = req.params.id;
  let data = await categoryBLL.GetCatById(pid)
  res.send(data)
})

router.route("/EditCategory/:id").put(async function(req, res){
  let pid = req.params.id;
  let prod = req.body;
  let data =await categoryBLL.EditCategory(pid,prod);
  res.send(data)
})

router.route("/AddCategory").post(async function(req, res){
   let prod = req.body;
  let data =await categoryBLL.AddCategory(prod)
  res.send(data)
})

router.route("/DeleteCategory/:id").delete(async function(req, res){
  let pid = req.params.id;
 let data =await categoryBLL.DeleteCategory(pid)
 res.send(data)
})

// app.use(express.json());

module.exports=router