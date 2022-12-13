const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middlewares/fetchuser');

const JWT_SECRET = 'AmanSuryavanshi$SECERET$';

//Route 1: Create a User using: POST "/api/auth/createuser". No login required

router.post("/createuser",
  [
    //using express validator used for checking if given data is valid or not and if not valid u can also give msg to it
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if there are errors, return Bad request and the error message
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      // The FINDONE() method finds and returns one document that matches the given selection criteria.
      if (user) {
        return res
          .status(400)
          .json({ erorr: "A user with this email already exists" });
      }

      // => we will use AWAIT wherever a function is returning promise
      //     -When we make a promise in React Native, it will be executed
      //     -When the execution time comes, or it will be rejected. 
      //       A promise is used to handle the asynchronous output of an executed operation. 
      // AWAIT means ruko aur abhi value leke niche jao jab tk promise resolve na hojaye
      
      
      
      // making password encrypted in hashed form using BCRYPT JS it will help us to make the user login data secured
      const salt = await bcrypt.genSalt(10);
      secPassword = await bcrypt.hash(req.body.password, salt); //Now it will return pasowrd in hashed format

      // A SALT is random data that is used as an additional input to a one-way function that hashes data, a password.
      //  SALTS are used to safeguard passwords in storage.
      
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      // it will give a unique token (authtoken) whenever a user enter email id and password 
      // JWT.VERIFY is used ot verify the user using the authtoken
      // [J W T] JSON WEB TOKEN (installed using npm i jsonwebtoken ) -> It is a way to verify a user
      
      res.json({authtoken})

      // catching errors
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


//Route 2:Authenticate a user using: POST "/api/auth/login". No login required

router.post("/login",
  [
    //validation checks in Email and password
    body("email", "Enter a valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],async (req, res) => {

//if there are errors, return Bad request and the error message
   
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const{email,password} = req.body;
    try{
      let user = await User.findOne({email}); //finding user in database with the entered email id
      if(!user){
        return res.status(400).json({error: "Sorry user does not exists"}) 
      }
    

      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }

      const data={
          user:{
            id: user.id
          }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({authtoken})
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })


  //Route 3: Get loggedin User Details using: POST "/api/auth/getuser".Login required


  router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
    // .select: specifies which document fields to include or (-) exclude 
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
  })

module.exports = router;
