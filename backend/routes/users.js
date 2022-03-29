const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});


//REGISTER
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const birthday = " ";
  const street_address = " ";
  const city = " ";
  const state = " ";
  const zipcode = " ";
  const height = " ";
  const weight = " ";
  const race = " ";
  const termsAndCondition = " ";

  const newUser = new User({ name, email, password, termsAndCondition, birthday, street_address, city, state, zipcode, height, weight, race });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});


//////UPDATE
// router.post("/update", asyncHandler(async (req, res) => {

// }));


router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.email = req.body.email;
      user.password = req.body.password;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;

/////////////////////////////////////////////////////////////////////////////



// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.status(400).json({ msg: "Not all fields have been entered." });

//     const user = await User.findOne({ email: email });
//     if (!user){
//       return res
//         .status(400)
//         .json({ msg: "No account with this email has been registered." });
//     }

//     if (await user.matchPassword(password)){
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//       // console.log("token",token);
//       // console.log("correct pass: " + password + " ++++ " + " user.pass: " + user.password);
//       res.json({
//         token,
//         user: {
//           id: user._id,
//           displayName: user.displayName,
//         },
//       });
//       // res.send('/screens/Dashboard');
      
//     } else{
//       // console.log("NOPE pass: " + password + " ++++ " + " user.pass: " + user.password);
//       return res.status(400).json({ msg: "Invalid credentials." });
//     }
//   } catch (err) {
//     res.json({ error: err.message });
//   }
// });

router.post("/login", (req, res, next) => {
  let fetchedUser;

  User.findOne({email:req.body.email}).then(user=>{
    if(!user){
      return res.status(401).json({
        message: "Auth failed no such user"
      })
    }
    fetchedUser=user;
    return bcrypt.compare(req.body.password, user.password);
  }).then(result=>{
    console.log(fetchedUser)
    if(!result){
      return res.status(401).json({
        message: "Auth failed incorect password"
      })
    }
    const token = jwt.sign(
      { email: fetchedUser.email, userId: fetchedUser._id },
      "secret_this_should_be_longer",
      { expiresIn: "1h" }
    );
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: fetchedUser._id
    });
  })
  .catch(e=>{
   
    console.log(e)
  
  })
})


// router.get("/", auth, async (req, res) => {
//   const user = await User.findById(req.user);
//   res.json({
//     displayName: user.displayName,
//     id: user._id,
//   });
// });

module.exports = router;
