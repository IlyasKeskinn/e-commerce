const express = require("express");
const router = express.Router();

// about settings

const aboutController = require("../../controller/siteSettings/about_controller");
router.get("/about/getabout", aboutController.getAbout);
router.post("/about/postabout", aboutController.postAbout);
router.put("/about/updateabout/:id", aboutController.updateAbout);



module.exports = router;