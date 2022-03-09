const mongoose = require("mongoose");
// import mongoose from "mongoose"
const Schema = mongoose.Schema;

const eventsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;
