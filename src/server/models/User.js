var mongoose = require('mongoose');

var User = new mongoose.Schema({
  username: String,
  password: String,
  access_token: String
});

module.exports = mongoose.model('User', User);
