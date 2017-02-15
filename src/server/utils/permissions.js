var jwt = require('jsonwebtoken');

module.exports.hasRoles = function(roles) {
  return function(req, res, next) {
    verifyToken(req, function(token) {
      next();
    }, function(err) {
      res.status(401).send(err);
    });
  }

  function verifyToken(req, callback, error) {
    var token = req.get('token');

    if (token) {
      jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
          error(err.name+": "+err.message);
        }
        callback(token);
      });
    } else {
      error('undefined token');
    }
  }

}
