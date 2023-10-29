const express = require('express');
const router = express.Router();
const userController = require("../controllers/userLogin");
const userRegister = require("../controllers/userRegister");


// Define your routes
router.post('/login', userController.login);
router.post('/register',userRegister.register);
router.get('/profileinfo', userRegister.profile);

module.exports = router;
