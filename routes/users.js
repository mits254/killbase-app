'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');


router.post('/users', (req, res, next) => {
    console.log(req.body);

  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users')
        .insert({
          full_name: req.body.full_name, 
          email: req.body.email,
          password: hashed_password,        
        }, '*');
    })
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

// router.post('/users', function (req, res) {
  
//       User.insert({first: req.body.firstName}).then(function () {
//         res.redirect()
//       })
    
//   })
module.exports = router;