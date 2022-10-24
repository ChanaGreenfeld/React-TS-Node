 const usersBLL = require("../BLL/usersBLL");
//import usersBLL from '../BLL/usersBLL';
const express = require("express");
//import express from "express";
const router=express.Router();
 const jwt=require('jsonwebtoken')
//import jwt from "jsonwebtoken";

const accessTokenSecret="somerandomaccesstoken";
// const refreshTokenSecret="somerandomrefreshtoken";


// const authenticateJWT=(req,res,next)=>{
//   const authHeader=req.headers.authenticate;
//   if(authHeader){
//     const token=authHeader.split(' ')[1];
//     jwt.verify(authHeader,accessTokenSecret,(err,date)=>{
//       if(err){
//         console.log(err);
//         return res.sendStatus(403);
//       }
//       req.user=user;
//       next();
//     });
//   }
//   else{
//    return res.sendStatus(401);
//   }
// }


router.route("/Login").post(async function(req, res){
  debugger

  let use = req.body;
  debugger
  let data =await usersBLL.Login(use.email,use.password)
  debugger
 return res.json(data);
})


router.route("/GetAll").get(async function (req, res){
  let data = await usersBLL.GatAll();
   return res.json(data);
});


router.route("/GetUserById/:id").get(async function(req, res){
  let pid = req.params.id;
  let data = await usersBLL.GetUserById(pid)
  return res.json(data);
})

router.route("/EditUser/:id").put(async function(req, res){
  let pid = req.params.id;
  let prod = req.body;
  let data =await usersBLL.EditUser(pid,prod);
  return res.json(data);
})

router.route("/AddUser").post(async function(req, res){
   let prod = req.body;
  let data =await usersBLL.AddUser(prod)
  return res.json(data);
})

router.route("/DeleteUser/:id").delete(async function(req, res){
  let pid = req.params.id;
 let data =await usersBLL.DeleteUser(pid)
  return res.json(data);
})

// app.use(express.json());

module.exports=router