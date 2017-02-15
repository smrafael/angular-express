var jwt = require('jsonwebtoken');

// Roles are not being verified yet
module.exports.hasRoles = function(roles) {
  return function(req, res, next) {
    verifyToken(req, function(decodedToken) {
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
          return;
        }
        callback(decoded);
      });
    } else {
      error('undefined token');
    }
  }

}
