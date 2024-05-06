const express = require("express")
const router = express.Router();
const userController = require("../controller/user");

const isAuth = require("../middlewares/isAuth");

router.get("/getAddress/:id", isAuth, userController.getUserAllAddress);
router.get("/getAddressById/:id", isAuth, userController.getUserAddressById);
router.put("/postAddress/:id", isAuth, userController.postAddress);
router.put("/updateAddress/:id", isAuth, userController.putAddress);
router.put("/deleteAddress/:id", isAuth, userController.deleteAddress);


module.exports = router;