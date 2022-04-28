const mongoose = require("mongoose");
// import mongoose from "mongoose"
const Schema = mongoose.Schema;

const contactsSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Contacts = mongoose.model("Contacts", contactsSchema);

module.exports = Contacts;
