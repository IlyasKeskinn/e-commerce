const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
//login 
router.post("/login", authController.postLogin);

//creating user
router.post("/register", authController.postRegister)

module.exports = router