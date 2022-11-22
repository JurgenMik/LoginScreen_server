const express = require('express');
const {loginUser, userProfile} = require('../controllers/login');

const router = express.Router();

router.post('/login', loginUser);
router.post('/profile', userProfile);

module.exports = router;