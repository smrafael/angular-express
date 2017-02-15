var router = require('express').Router();
var passport = require('passport');
var Account = require('../models/Account');
var permissions = require('../utils/permissions.js');

router.post('/register', function(req, res) {
});

router.post('/login', function(req, res) {

  res.status(200).send();
});

router.get('/logout', function(req, res) {
  res.status(200).send();
});

router.get('/ping',  function(req, res){
  res.status(200).send('ping!');
});

module.exports = router;
