var passport = require("passport");
var passportJWT = require("passport-jwt");
var cfg = require("./config.js");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var AccountModel = require("./models/Account.js");
var params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    AccountModel.findById(payload.id, function(err, user){
      if (user) {
        return done(null, {user: user});
      } else {
        return done(new Error("User not found"), null);
      }
    });
  });
  passport.use(strategy);

  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};
