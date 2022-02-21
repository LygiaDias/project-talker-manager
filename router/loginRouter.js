const express = require('express');

const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const login = require('../controllers/login');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, login);

module.exports = router;