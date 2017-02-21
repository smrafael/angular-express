var router = require('express').Router();
var passport = require('passport');
var jwt = require("jsonwebtoken");
var UserModel = require('../models/User.js');
var cfg = require("../config.js");
var auth = require("../auth.js")();

router.get('/', auth.authenticate(), function(req, res) {
  UserModel.find({}, function(err, users) {
    var result = users.map(function(user) {
      return {name: user.name, username: user.username};
    });
    res.status(200).send(result);
  });
});

router.post('/register', function(req, res) {
  new UserModel(req.body).save();
  res.status(200).send();
});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if (username && password) {
    UserModel.findOne({username: username, password: password},
      function(err, user) {

        if (err) {
          res.status(400).send(err);
        }

        if(user) {
          var token = jwt.sign({id: user._id}, cfg.jwtSecret, { expiresIn: '1h' });
          res.status(200).send({access_token: token});
        } else {
          res.sendStatus(401);
        }
      });

  } else {
    res.status(400).send('Username and Password are required');
  }

});

router.get('/logout', function(req, res) {
  res.status(200).send();
});

module.exports = router;
