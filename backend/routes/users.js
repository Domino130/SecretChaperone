const router = require("express").Router();
// import router from "express"
let User = require("../models/user.model");
// import User from "../models/user.model"
const asyncHandler = require("express-async-handler");
// import asyncHandler from "express-async-handler"
// const express = require("express");
// const generateToken = require("../generateToken")
// import  Alert  from "react-native"
// var Alert = require("react-native")



router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});


//REGISTER
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({ name, email, password });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//register
// router.post("/register", asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body;
//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     res.status(404);
//     throw new Error("User Already Exists");
//     }

//     const user = await User.create({name,email,password,});

//     if (user) {
//       res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       });
//     } 
//     else {
//       res.status(400);
//       throw new Error("User not found");
//     }
// }));


//login
// const { email, password } = req.body;
  // const user = await User.findOne({ email });
  // if (user && (await user.matchPassword(password))) {
  // res.json({
  // _id: user._id,
  // name: user.name,
  // email: user.email,
  // token: generateToken(user._id),
  // });
  // } else {
  // res.status(401);
  // throw new Error("Invalid Email or Password");
  // // Alert.alert("Invalid email or password", "", [
  // //   { text: "Continue", onPress: () => console.log("faileddd") },
  // // ]);
  // }


  
/////LOGIN
router.post("/login", asyncHandler(async (req, res) => {
  // const Alert = require("react-native")
  const {email,password} =req.body;
  User.findOne({email:email},(err,user)=>{
      if(user){
         if(user.matchPassword(password)){
             res.send({message:"login success",user:user})
             //navigate to dashboard when correct
         }else{
             res.send({message:"wrong credentials"})
            //alert
         }
      }else{
          res.send("not registered")
          //alert
      }
  })
}));



router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.email = req.body.email;
      user.password = req.body.password;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});




module.exports = router;
