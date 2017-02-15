var router = require('express').Router();
var passport = require('passport');
var Account = require('../models/Account');
var jwt = require('jsonwebtoken');
var permissions = require('../utils/permissions.js');

router.post('/register', function(req, res) {
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
       if (err) {
         res.status(500).send(err);
       }

       passport.authenticate('local')(req, res, function () {
           res.status(200).send();
       });
   });
});

router.post('/login', passport.authenticate('local'), function(req, res) {

  var token = jwt.sign({user: req.user.username}, 'secret', {expiresIn: '1h'});
  req.user.access_token = token;
  req.user.save();

  res.status(200).send(token);
});

router.get('/logout', function(req, res) {
  res.status(200).send();
});

router.get('/ping', permissions.hasRoles('admin'), function(req, res){
  res.status(200).send('ping!');
});

module.exports = router;
