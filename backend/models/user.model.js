const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
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
    birthday: {
      type: Number,
      // required: true,
      trim: true,
    },
    street_address: {
      type: String,
      // required: true,
      trim: true,
    },
    city: {
      type: String,
      // required: true,
      trim: true,
    },
    state: {
      type: String,
      // required: true,
      trim: true,
    },
    zipcode: {
      type: Number,
      // required: true,
      trim: true,
    },
    height: {
      type: Number,
      // required: true,
      trim: true,
    },
    weight: {
      type: Number,
      // required: true,
      trim: true,
    },
    race: {
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
