const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.post('/auth/login', userController.login);

module.exports = router;
