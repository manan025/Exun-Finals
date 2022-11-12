const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/users')


//global vars
const router = express.Router()


//routes
router.get('/', (req, res) => {
    res.send('Authentication')
})


router.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((hashed) => {
        const user = new User({
          email: req.body.email,
          name: req.body.name,
          password: hashed,
        });
  
        user.save()
          .then((result) => {
            res.json({message: "User Created Successfully", error: false});
          })
          .catch((err) => {
            res.send({message: "Error creating user", error: true})
          });
      })
      .catch((e) => {
        res.json({message: "Error hashing password", error: true})
      });
});


router.post("/login", (req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((check) => {
            if(!check) {
              return res.json({message: "Passwords does not match", error: true})
            }
  
            const token = jwt.sign(
              {userId: user._id, userEmail: user.email,},
              "core",
              {expiresIn: "24h"}
            )
  
            res.json({message: "Login Successful", email: user.email, token: token})
          })
        .catch((error) => {
            res.json({message: "Passwords does not match", error:true})
        });
      })

    .catch((err) => {
        res.json({message: "User does not exist", error: true});
    });
});


module.exports = router