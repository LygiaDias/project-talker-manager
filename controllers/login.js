const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}
function login(req, res) {
    return res.status(200).json({ token: generateToken() });
}

module.exports = login;