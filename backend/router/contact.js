const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactMsg");

const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
//deal collectioon
router.get("/get_contacts",isAuth, isAdmin,contactController.getContactMsg);
router.get("/get_contactById/:id",isAuth, isAdmin, contactController.getContactById);
router.post("/post_contact", isAuth, isAdmin, contactController.postContactMsg);
router.put("/update_contact/:id", isAuth, isAdmin, contactController.updateContactMsg);

module.exports = router;