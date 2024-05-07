const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
//login 
router.post("/login", authController.postLogin);

//creating user
router.post("/register", authController.postRegister)

//confirm user 
router.post("/confirm/:id", authController.confirmUser);

module.exports = router