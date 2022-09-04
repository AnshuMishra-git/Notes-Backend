const jwt = require('jsonwebtoken');
const config = require('../../config/index');


exports.generateToken = function(user) {
  const userData = {
    userId: user,
  };
  return jwt.sign(userData, config.secret, {
    expiresIn: 86400, // expires in 24 hours
  });
};



exports.jwt = function(req, res, next) {
  const token = req.headers['authorization'];
  const result = token ? token.substr(token.indexOf(' ') + 1) : false;
  if (!result) {
    return res.status(403).send({'status': false, 'code': 403, 'message': 'Unauthorized !'});
  }
  jwt.verify(result, config.secret, function(err, decoded) {
    if (err) {
      return res.status(500).send({'status': false, 'code': 500, 'message': 'Failed to authenticate token. !'});
    }
    req.user = decoded;
    next();
  });
};

