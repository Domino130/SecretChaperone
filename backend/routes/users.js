// const router = require("express").Router();
// let User = require("../models/user.model");
// const asyncHandler = require("express-async-handler");
// const generateToken = require("../generateToken")
// const jwt = require('jsonwebtoken');

const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../generateToken")
const User = require("../models/user.model")


// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });


// //REGISTER
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



// /////LOGIN
// router.post("/login", asyncHandler(async (req, res) => {
//   // const Alert = require("react-native")
//   const {email,password} =req.body;
//   User.findOne({email:email},(err,user)=>{
//       if(user){
//          if(user.matchPassword(password)){
//              res.send({message:"login success",user:user})
//             //  res.json({
//             //   _id: user.id,
//             //   name: user.name,
//             //   email: user.email,
//             //   token: generateToken(user._id),
//             // })
//              //navigate to dashboard when correct
//          }else{
//              res.send({message:"wrong credentials"})
//          }
//       }else{
//           res.send("not registered")
//       }
//   })
// }));

//////UPDATE
// router.post("/update", asyncHandler(async (req, res) => {

// }));


// router.route("/:id").get((req, res) => {
//   User.findById(req.params.id)
//     .then((user) => res.json(user))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
// router.route("/:id").delete((req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(() => res.json("User deleted."))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
// router.route("/update/:id").post((req, res) => {
//   User.findById(req.params.id)
//     .then((user) => {
//       user.email = req.body.email;
//       user.password = req.body.password;

//       user
//         .save()
//         .then(() => res.json("User updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });
// module.exports = router;




/////////////////////////////////////////////////////////////////////////////

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user){
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });
    }
      

    const noMatch = await bcrypt.compare(password, user.password);
    //
    if (user.matchPassword(password)){
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      // console.log("token",token);
      res.json({
        token,
        user: {
          id: user._id,
          displayName: user.displayName,
        },
      });

    } else{

 res.status(400).json({ msg: "Invalid credentials." });
      return
       
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});


// router.delete("/delete", auth, async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.user);
//     res.json(deletedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.post("/tokenIsValid", async (req, res) => {
//   try {
//     const token = req.header("x-auth-token");
//     if (!token) return res.json(false);

//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     if (!verified) return res.json(false);

//     const user = await User.findById(verified.id);
//     if (!user) return res.json(false);

//     return res.json(true);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

module.exports = router;