const productBLL = require("../BLL/productBLL");
//import productBLL from '../BLL/productBLL';
 const express = require("express");
//import express from "express";
const router=express.Router();

const jwt=require('jsonwebtoken')
// import jwt from "jsonwebtoken";

const accessTokenSecret="somerandomaccesstoken";

const authenticateJWT=(req,res,next)=>{
  const authHeader=req.headers.authorization;
  if(authHeader){
    const token=authHeader.split(' ')[1];
    jwt.verify(token,accessTokenSecret,(err,user)=>{
      if(err){
       // console.log(err);
        return res.sendStatus(403);
      }
      req.user=user;
      next();
    });
  }
  else{
   return res.sendStatus(401);
  }
}

router.route("/GetAllProducts").get(authenticateJWT, async function (req, res){
  let data = await productBLL.GatAll();
  debugger
   return res.json(data);
});


router.route("/GetProductById/:id").get(async function(req, res){
  let pid = req.params.id;
  debugger
  let data = await productBLL.GetProdById(pid)
  return res.json(data);
})

router.route("/EditProduct/:id").put(async function(req, res){
  let pid = req.params.id;
  let prod = req.body;
  debugger
  let data =await productBLL.EditProduct(pid,prod);
  return res.json(data);
})

router.route("/AddProduct").post(async function(req, res){
   let use = req.body;
  let data =await productBLL.AddProduct(use)
  return res.json(data);
})

router.route("/DeleteProduct/:id").delete(async function(req, res){
  let pid = req.params.id;
 let data =await productBLL.DeleteProduct(pid)
  return res.json(data);
})

// app.use(express.json());

module.exports=router