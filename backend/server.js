const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

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
app.use("/users", usersRouter);
const contactRouter = require("./routes/contacts_r");
app.use("/contacts", contactRouter);
const eventRouter = require("./routes/events_r");
app.use("/events", eventRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;  
// const phoneNumber = process.env.TWILIO_PHONE_NUMBER

const client = new twilio(accountSid, authToken);

app.post('/api/messages', () => {
  client.messages
    .create({
      body: 'Twilio Testing Notifs!',
      from: '+12312722858',
      to: '+19854458938'
    })
    .then(message => console.log(message.sid));
});