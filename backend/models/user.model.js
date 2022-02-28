const mongoose = require("mongoose");
// import mongoose from "mongoose"
const bcrypt = require('bcrypt')
// import bcrypt from "bcrypt"

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: 
    {
      type: String,
      // required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      // required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword){
return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
  next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
