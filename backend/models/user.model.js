const mongoose = require("mongoose");
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
    termsAndCondition: {
      type: String,
      // required: true,
      // trim: true,
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

const User = mongoose.model("User", userSchema);

module.exports = User;
