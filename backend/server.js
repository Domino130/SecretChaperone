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

//TWILIO
const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

//start event
app.post("/api/messages/start", () => {
  client.messages
    .create({
      body: "Secret Chaperone: name has added you as a contact to an event:eventname at location from time to time. You will be notified if they do not check in or have ended the event.",
      from: "",
      to: "",
    })
    .then((message) => console.log(message.sid));
});

//end event
app.post("/api/messages/end", () => {
  client.messages
    .create({
      body: "Secret Chaperone: name has ended the event.",
      from: "",
      to: "",
    })
    .then((message) => console.log(message.sid));
});

//did not check in
app.post("/api/messages/noCheck", () => {
  client.messages
    .create({
      body: "Secret Chaperone: name has not checked in.",
      from: "",
      to: "",
    })
    .then((message) => console.log(message.sid));
});

//did check in
app.post("/api/messages/yesCheck", () => {
  client.messages
    .create({
      body: "Secret Chaperone: name has checked in.",
      from: "",
      to: "",
    })
    .then((message) => console.log(message.sid));
});
