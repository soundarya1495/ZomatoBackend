require('dotenv').config();
const express= require("express");
const router= express.Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const User = require("../model/userschema");

router.post("/register", async (req, res) => {

  const user = await User.create({
    username: req.body.username,
    password: req.body.password
  });
  
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return res.status(200).json({status: 'success',
    token,
    data: {
      newUser,
    },
});
});
module.exports = router;