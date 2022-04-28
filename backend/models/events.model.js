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
    location: {
      type: String,
    },
    contacts: {
      type: Array,
      required: true,
    },
    dateTime: {
      type: String,
    },
    sms: {
      type: Boolean,
    },
    email: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;
