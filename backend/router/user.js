const express = require("express")
const router = express.Router();
const userController = require("../controller/user");

router.put("/postAddress/:id", userController.postAddress);
router.put("/putAddress/:id", userController.putAddress);
router.put("/deleteAddress/:id", userController.deleteAddress);


module.exports = router;