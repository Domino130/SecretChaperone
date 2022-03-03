const express = require("express");
// import express from "express"
const cors = require("cors");
// import cors from "cors"
const mongoose = require("mongoose");
// import mongoose from "mongoose"
// const userRoutes = require("./userRoutes");
require("dotenv").config();
// import config from "dotenv"

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
// import usersRouter from "../routes/users.js"
app.use("/users", usersRouter);
const contactRouter = require("./routes/contacts_r");
// import contactRouter from "../routes/contacts_r.js"
app.use("/contacts", contactRouter);



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
