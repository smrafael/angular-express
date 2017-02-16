var mongoose = require('mongoose');

var Account = new mongoose.Schema({
  username: String,
  password: String,
  access_token: String
});

module.exports = mongoose.model('Account', Account);
