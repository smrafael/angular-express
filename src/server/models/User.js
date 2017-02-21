var mongoose = require('mongoose');

var User = new mongoose.Schema({
  name: String,
  username: String,
  password: String
});

module.exports = mongoose.model('User', User);
