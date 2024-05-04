const express = require("express")
const router = express.Router();
const userController = require("../controller/user");

router.get("/getAddress/:id", userController.getUserAllAddress);
router.get("/getAddressById/:id", userController.getUserAddressById);
router.put("/postAddress/:id", userController.postAddress);
router.put("/updateAddress/:id", userController.putAddress);
router.put("/deleteAddress/:id", userController.deleteAddress);


module.exports = router;