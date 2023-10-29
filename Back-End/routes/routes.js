const express = require("express");

const router = express.Router();

const userLogin = require("../controllers/userLogin");
const userRegister = require("../controllers/userRegister");

// Define your routes
router.post("/login", userLogin.login);

router.post("/register", userRegister.createRegister);
router.get("/profileinfo", userRegister.getProfile);

module.exports = router;
