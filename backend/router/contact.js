const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactMsg");
//deal collectioon
router.get("/get_contacts", contactController.getContactMsg);
router.get("/get_contactById/:id", contactController.getContactById);
router.post("/post_contact", contactController.postContactMsg);
router.put("/update_contact/:id", contactController.updateContactMsg);

module.exports = router;