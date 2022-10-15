const express = require('express');
const registerController = require('../controllers/register');

const router = express.Router();

router.post('/signup', registerController.registerUser);


module.exports = router;