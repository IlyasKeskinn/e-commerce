const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
//login 
router.post("/login", authController.postLogin);

//creating user
router.post("/register", authController.postRegister)

//confirm user 
router.post("/confirm/:id", authController.confirmUser);

// password reset request
router.post("/reset_password/request", authController.resetPaswordRequest);

// password reset
router.put("/reset_password", authController.resetPassword);

module.exports = router