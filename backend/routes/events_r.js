const router = require("express").Router();
let Event = require("../models/events.model");

router.route("/").get((req, res) => {
  Event.find()
    .then((event) => res.json(event))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const dateTime = req.body.dateTime;
  const contacts = req.body.contacts;
  const sms = req.body.sms;
  const newEvent = new Event({
    name,
    location,
    dateTime,
    contacts,
    sms,
  });

  newEvent
    .save()
    .then(() => res.json("Event added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Event.findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json("Event deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  Event.findById(req.params.id)
    .then((event) => {
      event.name = req.body.name;
      event.location = req.body.location;
      event.dateTime = req.body.dateTime;
      event.contacts = req.body.contacts;
      event.sms = req.body.sms;

      event
        .save()
        .then(() => res.json("Event updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
