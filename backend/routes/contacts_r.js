const router = require("express").Router();
let Contact = require("../models/contacts.model");

router.route("/").get((req, res) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const full_name = req.body.full_name;
  const phone = req.body.phone;
  const email = req.body.email;
  const newContact = new Contact({ full_name, phone, email });

  newContact
    .save()
    .then(() => res.json("Contact added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Contact.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json("Contact deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  Contact.findById(req.params.id)
    .then((contact) => {
      contact.full_name = req.body.full_name;
      contact.phone = req.body.phone;
      contact.email = req.body.email;

      contact
        .save()
        .then(() => res.json("Contact updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
