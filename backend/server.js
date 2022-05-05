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
      body: "Secret Chaperone: " + dataN +  " has started their event.",
      from: "+12312722858",
      to: "",
    })
    .then((message) => console.log(message.sid));
});

//end event
app.post("/api/messages/end", () => {
  client.messages
    .create({
      body: "Secret Chaperone: " + dataN +  " has ended the event.",
      from: "+12312722858",
      to: "",
    })
    .then((message) => console.log(message.sid));
});

//did not check in
app.post("/api/messages/noCheck", () => {
  client.messages
    .create({
      body: "Secret Chaperone: " + dataN +  " has not checked in.",
      from: "+12312722858",
      to: "",
    })
    .then((message) => console.log(message.sid));
});

const dataN = "Mary Smith";
const name = "Date with Tom";
const location = "Starbucks, West Thomas Street, Hammond, LA, USA";
const time = "5 : 00"

//when the event is created, to notify contacts that they are in fact a contact to an event
app.post('/api/messages/contact', () => {
  client.messages
    .create({
      body: "Secret Chaperone:" + dataN +  " has added you as a contact to an event: " + name + "at " + location + ", beginning at " + time + ". You will be notified when they have started the event, if they do not check, and once they have ended the event.",
      from: '+12312722858',
      to: ''
    })
    .then(message => console.log(message.sid));
});
