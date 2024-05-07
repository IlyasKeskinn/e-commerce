const express = require("express");
const router = express.Router();
const paymentController = require("../controller/payment");


router.post("/", paymentController.postPayment)

module.exports = router;